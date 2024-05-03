# Manifest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The namespaced identifier with which the validator registers. | 
**name** | **str** | The Title Cased human-readable name for the validator. | 
**description** | **str** | A description that concisely states the expected behaviour of the validator. | 
**author** | [**Contributor**](Contributor.md) | The primary contact for the validator&#39;s git repository. | 
**maintainers** | [**List[Contributor]**](Contributor.md) | A list of all contacs for the validator&#39;s git repository. | 
**repository** | [**Repository**](Repository.md) | The git repository that contains the source code for this validator. | 
**namespace** | **str** | The organizational namespace for this validator; the prefix of the id. | 
**package_name** | **str** | The python package name for this validator; typically the same as the repository name and the suffix of the id. | 
**module_name** | **str** | The python module name for this validator; typically \&quot;validator\&quot; | 
**exports** | **List[str]** | The exports from the validator module; typically at least the validator&#39;s class name. | 
**tags** | [**Tags**](Tags.md) |  | [optional] 
**requires_auth** | **bool** | Indicates whether the user must be authenticated to install this validator. | [optional] [default to True]
**post_install** | **str** | The file path, relative to the module directory, to the post-install script for this validator. | [optional] [default to 'post-install.py']
**index** | **str** | The file path, relative to the module directory, to the index file for this validator. | [optional] [default to '__init__.py']
**featured** | **bool** | Indicates whether this validator is currently featured. | [optional] [default to False]
**playground_enabled** | **bool** | Indicates whether this validator can be used in the Guardrails Hub Playground. | [optional] [default to False]
**parameters** | [**ManifestParameters**](ManifestParameters.md) |  | [optional] 
**metadata** | **object** |  | [optional] 
**required_model_auth** | [**List[ModelAuth]**](ModelAuth.md) |  | [optional] 

## Example

```python
from guardrails_hub_types.models.manifest import Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of Manifest from a JSON string
manifest_instance = Manifest.from_json(json)
# print the JSON string representation of the object
print(Manifest.to_json())

# convert the object into a dict
manifest_dict = manifest_instance.to_dict()
# create an instance of Manifest from a dict
manifest_from_dict = Manifest.from_dict(manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


