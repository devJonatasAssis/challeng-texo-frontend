"use client";

import "./styles.css";
import Link from "next/link";

interface MenuItemProps {
  path: string;
  label: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="icon-wrapper">
      <Link href={props.path} className="link-content">
        {props.icon}
        <span className="label-content">{props.label}</span>
      </Link>
    </li>
  );
}
