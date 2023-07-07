# Auth

Used to collect a Token for a registered User.

**URL** : `/staging/generatetoken/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[name in plain text]",
    "useremail": "[valid email address]"
}
```

**Data example**

```json
{
    "username": "Authorizer",
    "useremail": "iloveauth@example.com"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If 'username' and 'useremail' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```