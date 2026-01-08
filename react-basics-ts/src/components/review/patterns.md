# React Component Patterns I Know

## 1. Component with Props
```typescript
interface ComponentProps {
  // Define props here
}

function Component({ prop1, prop2 }: ComponentProps) {
  return (
    // JSX here
  );
}
```

## 2. Component with State
```typescript
function Component() {
  const [value, setValue] = useState<Type>(initialValue);
  
  return (
    // Use value in JSX
  );
}
```

## 3. Event Handler
```typescript
const handleSomething = () => {
  // Do something
};

<button onClick={handleSomething}>Click</button>
```

## 4. Controlled Input
```typescript
const [value, setValue] = useState<string>("");

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

<input value={value} onChange={handleChange} />
```