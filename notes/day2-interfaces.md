
What is an interface?
- An interface is a shape of what an object should look like. It allows us to set a structure that typescript can check before it runs code to prevent bugs.

How is it similar to Pydantic?
- Its similar in the way that we define fields and types for those fields for the object. The syntax is also alike.
When do I use ? for optional?
- If a field/attribute is optional we add a ? after its name. This is for fields like a description which doesnt need a value.
How do I type an array of objects?
- An array of objects is like a list of dictionaries, with each entry having the fields defined in the interface/type
How do interfaces connect to React props?
- Interfaces allow us to define attributes of props and validate them. When used with useState we define the structure of the beginning state.
It helps us to visualize the data going into the function through the props.