# Carbonara Identify API Readme

This is the identify coverage API which Carbonara supports today with JSON responses.
Service is running on <https://trycarbonara.io>.

Please find our methodology [here](../methodology.md).

## Open Endpoints

Open endpoints require no Authentication.

* [Auth](auth.md) : `POST /staging/generatetoken/`
  * [Update 05/2023] Please use service url as `https://08nec61uab.execute-api.us-west-1.amazonaws.com/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header `authorizationToken` of the request.
A Token can be acquired from the Auth view above.

### Cloud related

Endpoints for calculating carbon emission for User's cloud resources/usage, related to the
User whose Token is provided with the request:

* [Calculate Cloud Footprint](cci.md) : `POST /api/cloud/`
  * Swagger - <https://trycarbonara.github.io/cci-swagger.html>
