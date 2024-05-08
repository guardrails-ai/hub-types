# Content


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_media_type** | **str** |  | [optional] 
**content_encoding** | **str** |  | [optional] 
**content_schema** | **object** |  | [optional] 

## Example

```python
from guardrails_hub_types.models.content import Content

# TODO update the JSON string below
json = "{}"
# create an instance of Content from a JSON string
content_instance = Content.from_json(json)
# print the JSON string representation of the object
print(Content.to_json())

# convert the object into a dict
content_dict = content_instance.to_dict()
# create an instance of Content from a dict
content_from_dict = Content.from_dict(content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


