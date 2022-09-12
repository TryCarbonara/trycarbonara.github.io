Welcome! This guide will walk you through installing Carbonara into your cluster. Currently, Carbonara supports Kubernetes. Carbonara leverages `kube-prometheus-stack` helm chart that includes all dependencies to get up and running and takes only a few minutes to install.

Carbonara currently only supports AWS, GCP and Azure in US Regions. Support for EU coming soon! If you are running on-prem or colocation, we can accomodate your requests, please contact hello@trycarbona.com 

**Note:** Carbonara's Methodology is loosely based on [Methodology | Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/docs/methodology/)

# Before you begin
In order to deploy the Carbonara helm chart, ensure the following is completed:
* Helm client ([version](https://helm.sh/docs/intro/install/) 3.0+) installed
* Kubernetes client ([version](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) 1.21+) installed
* Cluster created and configured with Kubernetes client

# **Step 1:** *Install Carbonara Client*
Carbonara client requires Python ([version](https://www.python.org/downloads/) 3.7+) to run. We recommend using a virtual python [environment](https://docs.python.org/3/library/venv.html) for using the tool for the best performance. The client is available on PyPi.

```
❯ pip install cbrctl
```

# **Step 2:** *Install Carbonara Agent*
Configures your cluster with Carbonara agent. Running the following commands will also install Prometheus, Grafana, and kube-state-metrics in the namespace supplied. View install configuration options [here](https://github.com/TryCarbonara/CarbonaraResources).

```
# Initialize Carbonara context
❯ cbrctl init --provider aws
Context Initialized.

# Carbonara Context is persisted at "~/.kube/carbonara_config" locally
```

```
# Generate Carbonara auth token
❯ cbrctl auth
Please enter a valid name: <USER_NAME>
Please enter a valid email: <USER_EMAIL>

Please persist your auth token: <GENERATED_256_BIT_TOKEN>
Context Updated.

# Carbonara Token is also persisted at "~/.kube/carbonara_config" locally
```

```
# Configure target cluster with Carbonara packages
❯ cbrctl config
Enter target cluster: <CLUSTER_NAME>

Cluster Configured Successfully. Happy Carbonara \m/

# By default, the token is fetched from the Carbonara config file. Otherwise it can also be passed using the `--token` flag.
# Current cluster name is picked up from kubectl current context.
```
> Note: Currently Carbonara tooling supports monitoring all user's cluster with an exception of `carbonara-monitoring` and some system level `kube-*.` namespaces. We will soon be supporting dynamic lisitng of these namespaces to monitor.
 
```
# Validate status and make sure all pods are running
❯ cbrctl status
```

In case, any pod is not running, please refer to these [Troubleshooting](TROUBLESHOOT.md) steps.
# **Step 3:** *Launch Visualization*
The client exposes Grafana to external IP using Load-Balancer. The launcher will use the default browser to open the dashboard link. Secured Grafana uses username as `admin` and password as `prom-operator`.

```
# Expose Grafana dashboard and launch it
❯ cbrctl show
```
Sample Dashboard: 
<img width="1680" alt="Screen Shot 2022-06-30 at 9 48 20 PM" src="https://user-images.githubusercontent.com/104105400/188719358-bd061aef-f5aa-4d2f-a250-fd024a4190a3.png">

# **Step 4:** *Carbonara Insight*
Explore the dashboard for viewing your Carbon Emission score for all your running workloads.

## Updating Carbonara Client
```
# Installs new version from pypi
❯ pip upgrade cbrctl
```

## Updating Carbonara Agent
```
# Coming soon ...
```

## Uninstalling Carbonara
```
# Uninstalls resources configured by Carbonara
❯ cbrctl eject
```
```
# Uninstalls Carbonara Client
❯ pip uninstall -y cbrctl
```
