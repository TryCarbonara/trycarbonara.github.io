# Methodology

In order to address carbon emissions from software, we focus on two main sources: Operational and Embodied Emissions. These are discussed in depth in the [Software Carbon Intensity (SCI)](https://github.com/Green-Software-Foundation/sci/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md) specification, developed by the [Green Software Foundation](https://greensoftware.foundation/). At Trycarbonara, we use this methodology to calculate the total carbon footprint of software.

```Total Emissions = Operational Emissions + Embodied Emissions```

## Operational Emissions

Operational Emissions are produced due to electricity consumption, which powers various components of a service, including servers, databases, and other systems. To calculate these emissions, we need to accurately measure the electricity usage of these components and the carbon emissions factor of the local grid where the service is run.

```Operational emissions = (Electricity usage [kWh]) x (Instance provider Power Usage Effectiveness (PUE)) x (grid emissions factors [metric tonnes CO2e/kWh])```

### Electricity Usage

The amount of electricity used by software is one of the biggest sources of Carbon Emissions. The total electricity usage is the sum of usage from compute, memory, storage, and networking:

```Total Electricity Usage = Electricity Usage From [Compute + Memory + Storage + Networking]```

#### Compute/Memory Energy Estimation

For the estimation of Compute & Memory in servers, we leverage hardware sensors capable of providing detailed power consumption data. Examples of such tools include IPMI and Redfish for server management, and NVML for monitoring NVIDIA GPUs. However, our method is not exclusive to these specific tools. We employ any available hardware sensor, regardless of the manufacturer, that can deliver accurate power information. This approach ensures a comprehensive understanding of both compute and memory usage across different server types.

#### Storage Energy Estimation

For estimating the energy usage associated with storage, we adopt the methodology suggested by the [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) project. This methodology involves deriving a coefficient for energy usage (in Watt-hours) per Terabyte of storage, both for Hard Disk Drives (HDDs) and Solid State Drives (SSDs).

HDD Energy Usage Estimation:

* Average HDD capacity in 2020: 10 Terabytes per disk
* Average power draw per disk for 2020: 6.5 Watts per disk

```Energy Usage (Watt-Hours per Terabyte) = Power Draw (Watt-Hours per Disk) / Storage Capacity (Terabytes per Disk)```

This translates to: `0.65 Watt-Hours per Terabyte for HDD = 6.5 Watt-Hours per Disk / 10 Terabytes per Disk`

SSD Energy Usage Estimation:

* Average SSD capacity in 2020: 5 Terabytes per disk
* Average power draw per disk for 2020: 6 Watts per disk

Similarly, for SSDs, the energy usage per Terabyte is calculated as:

```Energy Usage (Watt-Hours per Terabyte) = Power Draw (Watt-Hours per Disk) / Storage Capacity (Terabytes per Disk)```

This gives: `1.2 Watt-Hours per Terabyte for SSD = 6 Watt-Hours per Disk / 5 Terabytes per Disk`

To obtain the measure of Terabytes from different services, we query for the total bytes available rather than the total bytes used. This is because the total bytes available represent a more accurate reflection of the energy required to support storage.

##### *Consideration of Replication Factors*

Our carbon emissions calculation methodology accounts for storage replication. We set the replication factor as 1 by default, but this can be adjusted based on the specific configurations of the service or workload.

#### Network Energy Estimation

The application estimates network energy usage by looking at the total network usage, both incoming and outgoing data, in bytes. This total bandwidth usage is then used to calculate energy consumption. A coefficient of 1 Wh/Gb, as suggested by [Cloud Carbon Footprint's methodology](https://www.cloudcarbonfootprint.org/docs/methodology), is used in this calculation.

```Networking Coefficient = 1 Wh/Gb```

### Power Usage Effectiveness

In estimating the carbon emissions of workloads, we take into account the energy consumption for compute, storage, memory, and networking. This is then multiplied by the Power Usage Effectiveness (PUE) of the data center. PUE is a measure of a data center's energy efficiency, with a PUE of 1 indicating that all consumed energy is dedicated to powering the servers, without any energy being wasted on cooling. We default to an industry average PUE of [1.57](https://uptimeinstitute.com/about-ui/press-releases/uptime-institute-11th-annual-global-data-center-survey#:~:text=In%202021%2C%20the%20average%20annualized,over%20the%20past%20five%20years.), as suggested by the Uptime Institute, for on-premise workloads. For cloud-based workloads, we have specific PUE values for each of the three major cloud providers. However, this value can be adjusted based on user input if more specific data is available, allowing our methodology to provide a more accurate carbon footprint based on the specific circumstances of each workload.

### Grid Emissions Factors

Trycarbonara calculates two types of emissions: Attributional (Location-based) and Consequential. Attributional emissions assign a portion of the grid's emissions to your specific workloads based on their location. Consequential emissions reflect the system-wide impact of your operations on the grid's emissions, whether causing an increase or decrease. Our methodology is designed to be compatible with popular frameworks such as the GHG Protocol and the GSF SCI, and we collaborate with two organizations, [Watttime](https://www.watttime.org/) and [Electricity Maps](https://www.electricitymaps.com/), to obtain the necessary data for Grid Emissions.

The equations to calculate these emissions are as follows:

`Attributional Emissions = (Electricity usage [kWh]) x (Instance provider Power Usage Effectiveness (PUE)) x (Average Emissions Rate [metric tonnes CO2e/kWh])`

`Consequential Emissions = (Electricity usage [kWh]) x (Instance provider Power Usage Effectiveness (PUE)) x (Marginal Emissions Rate [metric tonnes CO2e/kWh])`

We use average and marginal emissions rates from Watttime and Electricity Maps respectively. In cases where these specific emissions data aren't available, we use default data sources. For the Average Emissions Rate, we default to ["Our World In Data"](https://ourworldindata.org/electricity-mix), and for the Marginal Emissions Rate, we default to the [UNFCCC data source](https://unfccc.int/sites/default/files/resource/IFI%20Default%20Grid%20Factors%202021%20v3.1_unfccc.xlsx). 

## Embodied Emissions

Embodied Carbon Emissions or [Embedded Emissions](https://en.wikipedia.org/wiki/Embedded_emissions) is the amount of carbon emitted during the creation and disposal of a hardware device. In order to estimate embodied emissions for the servers used to host and run software services and workloads, we need to calculate the fraction of the total embodied emissions that should be allocated to the usage of these servers.

```Embodied Emissions = Estimated emissions from Manufacturing, Transportation and End of life management of Server [metric tonnes CO2e ]```

The Green Software Foundation (GSF) released the [Software Carbon Intensity (SCI) Specification](https://github.com/Green-Software-Foundation/sci/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md), which defines a methodology for calculating the rate of carbon emissions for a software system. For the purpose of estimating embodied emissions, we have leveraged the relevant part of the specification.

In our implementation, we leverage this formula provided by the SCI standard:

```M = TE*(TR/EL)*(RR/TR)```

Where:

```
TE = Total Embodied Emissions, the sum of Life Cycle Assessment(LCA) emissions for all hardware components
TR = Time Reserved, the length of time the hardware is reserved for use by the software
EL = Expected Lifespan, the anticipated time that the equipment will be installed
RR = Resources Reserved, the number of resources reserved for use by the software.
TR = Total Resources, the total number of resources available.
```

The embodied emissions are typically modeled based on the specific server model used. For example, if the [Dell PowerEdge R940](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r940.pdf) server is used, the embodied emissions can be modeled as follows:

```
According to Dell, the total embodied emissions for 'Manufacturing, Transportation and End of Life' of PowerEdge 940 = 10.6% of Total LCA.
Total Embodied Emissions = 1.466 tonnes CO2eq
Expected Lifespan = 2 years = 17520 hours
Resources Reserved = 1 (Since the entire server is used)
Total Resources = 1
Hourly Embodied Emissions Constant = (1.466/17520) tons/hours
```

Please note that this is an example calculation and the specifics will vary depending on the server model used and the results from its Life Cycle Assessment.

## Estimating Energy Use of Cloud Services

Trycarbonara is designed to take advantage of any hardware sensors available to provide accurate energy use. However, the hyperscalers block access to sensors so no one has the direct data from the chip except for the hyperscalers themselves. That being said, the technology is quite robust at inferring the power draw as the industry around this has established well tested models. Trycarbonara's product uses a combination of these methods to produce granular data for public cloud instances.  

### Estimating the energy use of AWS Services

#### AWS EC2

The energy use of a Virtual Machine is derived as a combination of two factors, namely, the actual utilization of CPU attributed to the VM and the energy used by the underlying CPU. Today, we use real-time CPU utilization metrics such as Cloudwatch metrics or OpenTelemetry to gather utilization rates. This gives us a much better picture as opposed to assuming a utilization rate such as 50% which is often the case when using CUR reports. We are also investigating more advanced techniques like eBPF as part of our roadmap to more accurately attribute the CPU usage of a VM.

For estimating the energy use of the underlying CPU, today we rely on the [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) project for gathering the cloud factors. However, in the background Trycarbonara is creating data pipelines that will run real-time studies of the underlying metal instance and continuously update the cloud factors with more accurate values. (To be launched in 2024)

We continue to monitor other metrics such as total vCPUs, networking activity, storage and memory use to create an accurate picture of the total energy use of an EC2. 

#### AWS RDS 

Similar to EC2, we use a combination of real-time utilization metrics, coupled with cloud factors to derive the energy use for RDS. We continue to monitor other metrics such as total vCPUs, networking activity, storage and memory use to create an accurate picture of the total energy use of an RDS instance. 

#### AWS S3

For S3, we only consider storage which is fetched from *BucketSizeBytes* of Cloud Watch metrics. There is no customization required, however bucket size is the only metric used. With regards to the compute and networking needs for storage, Trycarbonara assumes the CPU responsible for doing the I/O will be accounted for as part of the Compute bucket, and networking will be accounted for through the network metrics. We also consider the replication factor for S3 buckets, gathered directly from the bucket properties.

#### AWS Lambda

Lambda, a serverless service, offers limited visibility into its operations. In order to access detailed usage metrics, we enable Lambda Insights for the desired functions. This feature adds a custom namespace in Cloud Watch metrics, detailing:

```
CPU total time (in seconds)
Real-time memory utilization (as a percentage)
Network usage (in bytes)
```

While the specific instance class is not visible, we can infer the vCPU based on memory usage. Lambdas can use memory ranging from 128MB to 10,240MB, increasing in 1MB steps ([Reference](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)). At 1,792MB, a lambda function is allocated one vCPU([Reference](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html)). Beyond this, additional vCPUs are granted, up to a maximum of 6 vCPUs. The vCPU count for a lambda function can be estimated by dividing its allocated memory by 1,792MB. 


## Appendix

### Power Consumption Data Source

Trycarbonara uses system tooling to fetch detailed system/process level power consumption metrics specifically for compute and memory resources on bare-metal hosts. Here is the list of the open source software (OSS) tooling that Trycarbonara leverages:

#### IPMI

[IPMI Project](https://www.gnu.org/software/freeipmi/) provides in-band and out-of-band IPMI software based on the [IPMI v1.5/2.0](http://developer.intel.com/design/servers/ipmi/index.htm) specification.

The IPMI specification defines a set of interfaces for platform management and is used by a variety of vendors for system management on motherboards. The features of IPMI that are most pertinent for Trycarbonara's needs are sensor monitoring and remote power control. These features allow for the measurement and control of power consumption metrics.

#### Node Exporter

[Node Exporter](https://github.com/prometheus/node_exporter) is a Prometheus exporter for hardware and OS metrics exposed by UNIX kernels, written in Go with pluggable metric collectors.

Trycarbonara uses Node Exporter to collect data on storage and network utilization. These metrics are then combined with appropriate factors to compute energy consumption by the resources, providing a detailed breakdown of power usage.
