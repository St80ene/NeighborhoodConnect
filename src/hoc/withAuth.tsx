import React from "react";
// import { Redirect } from "react-router-dom";

interface WithAuthProps {
  // Define any authentication-related props here
  isAuthenticated: boolean;
}

const withAuth =
  () =>
  <P extends object>(
    WrappedComponent: React.ComponentType<P & WithAuthProps>
  ): React.ReactNode => {
    const WithAuth: React.FC<P> = (props) => {
      // You can add authentication logic here based on the props
      const isAuthenticated = true; // Replace this with your actual authentication check

      // if (!isAuthenticated) {
      //   // Redirect or handle unauthenticated user
      //   return <Redirect to="/login" />;
      // }

      // If authenticated, render the wrapped component with additional props
      return <WrappedComponent isAuthenticated={isAuthenticated} {...props} />;
    };

    return WithAuth as unknown as React.ReactNode;
  };
export default withAuth;
