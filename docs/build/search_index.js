var documenterSearchIndex = {"docs":
[{"location":"index.html","page":"Home","title":"Home","text":"CurrentModule = RHClient","category":"page"},{"location":"index.html#RHClient-Documentation","page":"Home","title":"RHClient Documentation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Full implementation of Julia Client.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"A client for Rest Harness, a robust tool that acts to stand in place of another RESTful service. This can be used to mock out a service that doesn't yet exist or where there is a need to reproduce a particular set of inputs from an opaque service. It can also serve as a simple shared cache. This software runs as a daemon service by default. This library contains a client developed in Julia that can be used to interact with Rest Harness.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Visit our Github page: RHClient.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Modules = [RHClient]","category":"page"},{"location":"index.html#RHClient.rhClient","page":"Home","title":"RHClient.rhClient","text":"rhClient(url::String)\n\nConstructor for the REST Harness client\n\nArguments\n\nurl::String: concatenation of REST Harness IP + Port\n\n\n\n\n\n","category":"type"},{"location":"index.html#RHClient.create_path-Tuple{RHClient.rhClient, String, Int64, String}","page":"Home","title":"RHClient.create_path","text":"create_path(c::rhClient, path::String, rc::Int64, return_value::String; \n    delay::Int64=0, headers::Any=nothing)\n\nSend a \"POST\" HTTP request with a specified endpoint configuration to the REST Harness server.\n\nArguments\n\npath::String: the name of the endpoint.\nrc::Int64: the return code used by REST Harness when the endpoint is accessed.\nreturn_value::String: the content of the endpoint.\ndelay::Int64=0: number of seconds REST Harness waits before returning a response to a    \"GET\" request.\nheaders::Any=nothing: A dictionary containing headers to send with the \"POST\" request.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.create_paths-Tuple{RHClient.rhClient, Vector{Dict{String, Any}}}","page":"Home","title":"RHClient.create_paths","text":"create_paths(c::rhClient, path::Vector{Dict{String, Any}})\n\nSend a \"POST\" HTTP request with a collection of endpoint configurations to the REST Harness      server.\n\nArguments\n\npath::Vector{Dict{String, Any}}: a collection of endpoint configuraions.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.delete_path-Tuple{RHClient.rhClient, String}","page":"Home","title":"RHClient.delete_path","text":"delete_path(c::rhClient, path::String)\n\nSend a \"DELETE\" HTTP request with an endpoint name specified to delete it from the REST Harness     server.\n\nArguments\n\npath::String: the name of the endpoint.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.delete_paths-Tuple{RHClient.rhClient, Any}","page":"Home","title":"RHClient.delete_paths","text":"delete_paths(c::rhClient, path::String)\n\nSend a \"DELETE\" HTTP request to delete all endpoint configurations from the REST Harness      server.\n\nArguments\n\npath::Vector{Dict{String, Any}}: a collection of endpoint configuraions.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.get_all-Tuple{RHClient.rhClient}","page":"Home","title":"RHClient.get_all","text":"get_all(c::rhClient)\n\nSend a \"GET\" HTTP request to the REST Harness server and retrieve all of the currently      stored endpoint configurations.\n\nReturn the endpoint configurations as a dictionary with path as the keys and a dictionary of     the all other configurations as the values.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.get_path-Tuple{RHClient.rhClient, String}","page":"Home","title":"RHClient.get_path","text":"get_path(c::rhClient, path::String)\n\nSend a \"GET\" HTTP request to the REST Harness server and retrieve the endpoint configuration.\n\nReturn endpoint configuration as a dictionary with path as the key and a dictionary of all      other configurations as the value.\n\nArguments\n\npath::String: the name of the endpoint.\n\n\n\n\n\n","category":"method"},{"location":"index.html#RHClient.update_path-Tuple{RHClient.rhClient, String, Int64, String}","page":"Home","title":"RHClient.update_path","text":"update_path(c::rhClient, path::String, rc::Int64, return_value::String; \n    delay::Int64=0, headers=nothing)\n\nSend a specified endpoint configuration to the REST Harness server to update an existing endpoint.\n\nArguments\n\npath::String: the name of the endpoint.\nrc::Int64: the return code used by REST Harness when the endpoint is accessed.\nreturn_value::String: the content of the endpoint.\ndelay::Int64=0: number of seconds REST Harness waits before returning a response to a    \"GET\" request.\nheaders::Any=nothing: A dictionary containing headers to send with the \"POST\" request.\n\n\n\n\n\n","category":"method"}]
}
