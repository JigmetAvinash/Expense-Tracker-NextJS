import { UserButton } from "@clerk/nextjs";

const MainApp = () => {
    return ( 
        <>
        This is a protected route
        <UserButton />
        </>
     );
}
 
export default MainApp;