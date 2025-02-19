export interface buttonTypes {
  content?: string;
  imgPath?: string;
  imgAlt?: string;
  svgPath?: React.ReactNode;
  onClick?: () => void;
  disableButton?: boolean;
}
