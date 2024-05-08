# ModelAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**name** | **str** |  | 
**display_name** | **str** |  | [optional] 

## Example

```python
from guardrails_hub_types.models.model_auth import ModelAuth

# TODO update the JSON string below
json = "{}"
# create an instance of ModelAuth from a JSON string
model_auth_instance = ModelAuth.from_json(json)
# print the JSON string representation of the object
print(ModelAuth.to_json())

# convert the object into a dict
model_auth_dict = model_auth_instance.to_dict()
# create an instance of ModelAuth from a dict
model_auth_from_dict = ModelAuth.from_dict(model_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


