export interface buttonTypes {
  content?: string;
  imgPath?: string;
  imgAlt?: string;
  icon?: React.ReactNode;
  svgPath?: React.ReactNode;
  onClick?: () => void;
  disableButton?: boolean;
}
