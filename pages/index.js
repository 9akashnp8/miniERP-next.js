import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Router from "next/router";
import { checkAuthStatus } from "../lib/actions/auth";

export default function Home() {
  
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
