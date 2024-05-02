# Contributor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**email** | **str** |  | 

## Example

```python
from guardrails_hub_types.models.contributor import Contributor

# TODO update the JSON string below
json = "{}"
# create an instance of Contributor from a JSON string
contributor_instance = Contributor.from_json(json)
# print the JSON string representation of the object
print(Contributor.to_json())

# convert the object into a dict
contributor_dict = contributor_instance.to_dict()
# create an instance of Contributor from a dict
contributor_from_dict = Contributor.from_dict(contributor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


