import WrapperComponent from "./WrapperComponent";


export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!!!</h1>
      <div>NEXT_ENV={process.env.NEXT_ENV}</div>
      <div>SET_ENV={process.env.SET_ENV}</div>
      <div>NODE_ENV={process.env.NODE_ENV}</div>
      <div>TZ={process.env.TZ}</div>
      <WrapperComponent />
    </>
  );
}
