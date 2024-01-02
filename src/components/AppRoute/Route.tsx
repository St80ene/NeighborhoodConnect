import React, { memo } from "react";
import {
  Route as ReactRoute,
  RouteProps as BaseRouteProps,
} from "react-router-dom";

type RouterProps = BaseRouteProps & {
  isAuth?: boolean;
};

const Route = ({ isAuth, ...props }: RouterProps) => {
  return <ReactRoute {...props} />;
};

export default memo(Route);
