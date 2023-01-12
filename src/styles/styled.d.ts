import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    textDarkColor: string;
    bgColor: string;
    color1: string;
    color2: string;
    pointColor: string;
    alertColor: string;
  }
}
