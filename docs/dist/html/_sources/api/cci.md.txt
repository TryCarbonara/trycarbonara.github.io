# Carbonara Cloud Identify API Support

Get carbon emission data for User's cloud resources/usage for Authenticated User along with basic
token information.

**URL** : `/api/cloud/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a Usage with cloud provider as `aws` and service `ec2`.

```json
{
    "infrastructureInputData": {
        "cloudProvider": "AWS",
        "region": "us-west-2",
        "serviceType": "ec2",
        "instanceType": "m5.8xlarge",
        "inputFrequency": 300,
        "pue": 1.135,
        "inputs": [
            {
                "startTime": "2022-03-10 18:00:00-08:00",
                "computeUtilization": 30,
                "memoryUsage": 5000000000,
                "ssdStorageAvailable": 100000000,
                "networkInUsage": 123048878,
                "networkOutUsage": 123253343,
                "replicationFactor": 1,
                "tags": {}
            },
            {
                "startTime": "2022-03-10 18:05:00-08:00",
                "computeUtilization": 30,
                "memoryUsage": 5000000000,
                "ssdStorageAvailable": 100000000,
                "networkInUsage": 123048878,
                "networkOutUsage": 123253343,
                "replicationFactor": 1,
                "tags": {}
            },
            {
                "startTime": "2022-03-10 18:10:00-08:00",
                "computeUtilization": 30,
                "memoryUsage": 5000000000,
                "ssdStorageAvailable": 100000000,
                "networkInUsage": 123048878,
                "networkOutUsage": 123253343,
                "replicationFactor": 1,
                "tags": {}
            }
        ]
    }
}
```

sample output looks like.

```json
{
    "infrastructureOutputData": {
        "cloudProvider": "AWS",
        "inputFrequency": 300.0,
        "inputs": [
            {
                "averageCarbonIntensity": 445.3337696134527,
                "carbonFromComputeEmbodied": 0.00043085916095890404,
                "carbonTotalAverage": 0.0004319608531903429,
                "carbonTotalMarginal": 0.0004328926717232658,
                "carbonfromComputeAverage": 1.0595343533851992e-06,
                "carbonfromComputeMarginal": 1.9556954758643217e-06,
                "carbonfromHddStorageAverage": 0.0,
                "carbonfromHddStorageMarginal": 0.0,
                "carbonfromMemoryAverage": 3.744747786776885e-08,
                "carbonfromMemoryMarginal": 6.91208008636409e-08,
                "carbonfromNetworkInAverage": 2.350954150795301e-09,
                "carbonfromNetworkInMarginal": 4.339406628945125e-09,
                "carbonfromNetworkOutAverage": 2.3548606296535834e-09,
                "carbonfromNetworkOutMarginal": 4.346617233306646e-09,
                "carbonfromSsdStorageAverage": 4.585405453196186e-12,
                "carbonfromSsdStorageMarginal": 8.463771534323375e-12,
                "instanceType": "m5.8xlarge",
                "kwHCompute": 0.005245213333333334,
                "kwHHddStorage": 0.0,
                "kwHMemory": 0.0001853833333333333,
                "kwHNetworkIn": 1.1638373044166666e-05,
                "kwHNetworkOut": 1.1657712025416665e-05,
                "kwHSsdStorage": 2.2699999999999998e-08,
                "marginalCarbonIntensity": 822,
                "replicationFactor": 1,
                "startTime": "2022-03-10 18:00:00-08:00",
                "tags": {},
                "usageType": null
            },
            {
                "averageCarbonIntensity": 401.2413171764772,
                "carbonFromComputeEmbodied": 0.00043085916095890404,
                "carbonTotalAverage": 0.0004318517747515866,
                "carbonTotalMarginal": 0.0004328926717232658,
                "carbonfromComputeAverage": 9.546299619609221e-07,
                "carbonfromComputeMarginal": 1.9556954758643217e-06,
                "carbonfromHddStorageAverage": 0.0,
                "carbonfromHddStorageMarginal": 0.0,
                "carbonfromMemoryAverage": 3.373980679175213e-08,
                "carbonfromMemoryMarginal": 6.91208008636409e-08,
                "carbonfromNetworkInAverage": 2.118186413092796e-09,
                "carbonfromNetworkInMarginal": 4.339406628945125e-09,
                "carbonfromNetworkOutAverage": 2.1217061118660996e-09,
                "carbonfromNetworkOutMarginal": 4.346617233306646e-09,
                "carbonfromSsdStorageAverage": 4.131404913275772e-12,
                "carbonfromSsdStorageMarginal": 8.463771534323375e-12,
                "instanceType": "m5.8xlarge",
                "kwHCompute": 0.005245213333333334,
                "kwHHddStorage": 0.0,
                "kwHMemory": 0.0001853833333333333,
                "kwHNetworkIn": 1.1638373044166666e-05,
                "kwHNetworkOut": 1.1657712025416665e-05,
                "kwHSsdStorage": 2.2699999999999998e-08,
                "marginalCarbonIntensity": 822,
                "replicationFactor": 1,
                "startTime": "2022-03-10 18:05:00-08:00",
                "tags": {},
                "usageType": null
            },
            {
                "averageCarbonIntensity": 401.2413171764772,
                "carbonFromComputeEmbodied": 0.00043085916095890404,
                "carbonTotalAverage": 0.0004318517747515866,
                "carbonTotalMarginal": 0.0004328926717232658,
                "carbonfromComputeAverage": 9.546299619609221e-07,
                "carbonfromComputeMarginal": 1.9556954758643217e-06,
                "carbonfromHddStorageAverage": 0.0,
                "carbonfromHddStorageMarginal": 0.0,
                "carbonfromMemoryAverage": 3.373980679175213e-08,
                "carbonfromMemoryMarginal": 6.91208008636409e-08,
                "carbonfromNetworkInAverage": 2.118186413092796e-09,
                "carbonfromNetworkInMarginal": 4.339406628945125e-09,
                "carbonfromNetworkOutAverage": 2.1217061118660996e-09,
                "carbonfromNetworkOutMarginal": 4.346617233306646e-09,
                "carbonfromSsdStorageAverage": 4.131404913275772e-12,
                "carbonfromSsdStorageMarginal": 8.463771534323375e-12,
                "instanceType": "m5.8xlarge",
                "kwHCompute": 0.005245213333333334,
                "kwHHddStorage": 0.0,
                "kwHMemory": 0.0001853833333333333,
                "kwHNetworkIn": 1.1638373044166666e-05,
                "kwHNetworkOut": 1.1657712025416665e-05,
                "kwHSsdStorage": 2.2699999999999998e-08,
                "marginalCarbonIntensity": 822,
                "replicationFactor": 1,
                "startTime": "2022-03-10 18:10:00-08:00",
                "tags": {},
                "usageType": null
            }
        ],
        "region": "us-west-2",
        "serviceType": "ec2"
    }
}
```

## Notes

* Request Format

``` json
{
        "infrastructureInputData": {
            "properties": {
                "cloudProvider": {
                    "type": "string"
                },
                "gpuAllocated": {
                    "type": "number" // allocated gpu # count
                },
                "inputFrequency": {
                    "type": "number" // duration in seconds
                }
                "instanceType": {
                    "type": "string" // check cloud-providers supported instance types list
                },
                "pue": {
                    "type": "number" // power usage effectiveness for data-centers. We use provider/industry standarads as defaults
                },
                "region": {
                    "type": "string" // check cloud-providers supported regions list
                },
                "serviceType": {
                    "type": "string" // check list below for supported types
                },
                "usageType": {
                    "type": "string" // check list below for supported types
                },
                "vcpuAllocated": {
                    "type": "number" // allocated vgpu # count
                },
                "inputs": {
                    "items": {
                        "properties": {
                            "computeUtilization": {
                                "type": "number" // value in %, for ex: pass 30 for 30%
                            },
                            "hddStorageAvailable": {
                                "type": "number" // storage allocated/available in bytes
                            },
                            "memoryUsage": {
                                "type": "number" // memory used in bytes
                            },
                            "networkInUsage": {
                                "type": "number" // data received in bytes
                            },
                            "networkOutUsage": {
                                "type": "number" // data transferred in bytes
                            },
                            "replicationFactor": {
                                "type": "number" // replication factor to override. We apply usage based replication factors as default
                            },
                            "ssdStorageAvailable": {
                                "type": "number" // storage allocated/available in bytes
                            },
                            "startTime": {
                                "format": "date-time",
                                "type": "string"
                            },
                            "tags": {
                                "type": "object" // use metadata for tagging/labeling
                            }
                        },
                        "required": [
                            "startTime"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                }
            },
            "required": [
                "cloudProvider",
                "region",
                "serviceType",
                "inputFrequency"
            ],
            "type": "object"
        }
    }
```

* Supported Service Types:
    * AWS:
        * ```
            EC2
            EKS/ECS
            RDS
            S3
            Lambda
            Aurora
            ElasticCache
            EBS
            Redshift
            EFS
            DocDB
            DynamoDB
            ECR
            SimpleDB
            ```

* Supported Usage Types:
    * AWS:
        * ```
            S3
            S3_ONE_ZONE_REDUCED_REDUNDANCY
            EC2_EBS_VOLUME
            EC2_EBS_SNAPSHOT
            EFS
            EFS_ONE_ZONE
            RDS_BACKUP
            RDS_AURORA
            RDS_MULTI_AZ
            DOCUMENT_DB_BACKUP
            DOCUMENT_DB_STORAGE
            DYNAMO_DB
            ECR_STORAGE
            DOCUMENT_ELASTICACHE_BACKUP
            SIMPLE_DB
            ```
