import WrapperComponent from "./WrapperComponent";


export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!!!</h1>
      <div>{process.env.NEXT_PROJECT_DESCRIPTION}</div>
      <div>{process.env.PROJECT_DESCRIPTION}</div>
      <div>{process.env.NEXT_ENV}</div>
      <div>{process.env.SET_ENV}</div>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.TZ}</div>
      <WrapperComponent />
    </>
  );
}
