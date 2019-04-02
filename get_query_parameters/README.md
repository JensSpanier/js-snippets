# Get query parameters
Gets query parameters from URL with javascript.

Call e.g. `getURLParameters(location.href)`

`getURLParameters('http://example.com/?firstname=John&lastname=Doe')` will return this object:

```javascript
{
  firstname: "John",
  lastname: "Doe"
}
```
