# Troubleshooting - Kubernetes

Welcome! These troubleshooting steps will provide you insight about what actions does cbrctl commands perform behind the scenes.

**Note:** Default namespace used by Trycarbonara is `carbonara-monitoring`.

## Pre-requisites

```sh
# Adding Helm repo for resource configuration:
❯ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
❯ helm repo update
```

Most of the issues encoutered would be related to the cluster configuration step. Here is what `cbrctl config` runs:

### 1. Configures the cluster to setup a prometheus/grafana server

```sh
❯ helm upgrade -i prometheus \
prometheus-community/kube-prometheus-stack \
--namespace carbonara-monitoring \
-f https://raw.githubusercontent.com/Trycarbonara/CarbonaraResources/main/server-persistent.yaml \
--create-namespace

# (Optional) Validate configuration ready
❯ kubectl --namespace carbonara-monitoring get pods -l "release=prometheus"
```

### 2. Configures the cluster to setup a pushgateway server

```sh
❯ helm upgrade -i prometheus-pushgateway prometheus-community/prometheus-pushgateway \
--namespace carbonara-monitoring \
--set serviceMonitor.enabled=true \
--set serviceMonitor.namespace=carbonara-monitoring \
--set persistentVolume.enabled=true \
--create-namespace

# (Optional) Validate configuration ready
❯ kubectl --namespace carbonara-monitoring get pods -l "release=prometheus-pushgateway"
```

### 3. Configures the cluster to add grafana dashboards

```sh
❯ kubectl apply -f https://raw.githubusercontent.com/Trycarbonara/CarbonaraResources/main/grafana-dashboard-kubectl.yaml \
--namespace carbonara-monitoring
```

### 4. Download the agent manifest file to local

```sh
# $CLOUDPROVIDER and $TOKEN are passed by the client and configured as an environment variable

❯ wget https://raw.githubusercontent.com/Trycarbonara/CarbonaraResources/main/carbonara-agent-manifest.yaml
❯ cat carbonara-agent-manifest.yaml | sed "s/{{CLOUDPROVIDER}}/$CLOUDPROVIDER/g" | sed "s/{{TOKEN}}/$TOKEN/g" | kubectl apply --overwrite=true --namespace carbonara-monitoring -f -
```

## Validate status and make sure all pods are running

```sh
❯ kubectl get all --namespace carbonara-monitoring
```

> For any other inquiries, please contact: hello@trycarbonara.com
