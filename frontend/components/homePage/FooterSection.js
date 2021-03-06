import React, { Component } from "react";
import Link from "next/link";
import {
  FooterDiv,
  FooterNav,
  ContactDiv,
  LogoDiv,
  CopyRight
} from "./FooterStyles";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
        <LogoDiv>
          <Link prefetch href="/">
            <a>
              <img src="/static/img/softwareDev.png" />
            </a>
          </Link>
        </LogoDiv>
        <ContactDiv>
          <FooterNav>
            <ul>
              <li>
                <Link prefetch href="/index">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/blogs">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/contact">
                  <a>Resume</a>
                </Link>
              </li>
            </ul>
          </FooterNav>
          <CopyRight>
            <p>
              Copyright &copy; by{" "}
              <Link prefetch href="/contact">
                <a>David Lee</a>
              </Link>
            </p>
          </CopyRight>
        </ContactDiv>
      </FooterDiv>
    );
  }
}

export default FooterSection;
