import { StaticImageData } from 'next/image';
import type { MouseEventHandler, ReactElement } from 'react';
import type { TablerIcon } from '@tabler/icons-react';

export type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

export type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

export type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

export type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

export type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

export type Icon = TablerIcon;

export type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

export type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

export type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

export type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

export type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

export type Checkbox = {
  label: string;
  value: string;
};

export type Radio = {
  label: string;
};

export type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

export type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

export type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
};

export type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

export type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToActionType;
};

export type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

export type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

export type Team = {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
};

export type Testimonial = {
  testimonial?: string;
  startSlice?: number;
  endSlice?: number;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  name?: string;
  job?: string;
  image?: Image;
  href?: string;
  containerClass?: string;
  panelClass?: string;
  imageClass?: string;
  dataClass?: string;
  nameJobClass?: string;
  nameClass?: string;
  jobClass?: string;
  testimonialClass?: string;
};

export type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};

export type Price = {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToActionType;
  hasRibbon?: boolean;
  ribbonTitle?: string;
};

export type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

export type MenuLink = Link & {
  links?: Array<Link>;
};

export type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

export type Tab = {
  link?: Link;
  items: Array<Item>;
};

export type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: (index: number) => void;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

export type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

// WIDGETS
export type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
};

export type FAQsProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

export type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

export type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

export type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  /** How many columns should it have? */
  columns?: 1 | 2 | 3;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

export type ContentProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

export type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  /** Do you want to reverse the widget? */
  isReversed?: boolean;
};

export type TeamProps = Widget & {
  header?: Header;
  teams: Array<Team>;
};

export type AnnouncementProps = {
  title: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

export type TestimonialsProps = Widget & {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToActionType;
};

export type PricingProps = Widget & {
  header?: Header;
  prices: Array<Price>;
};

export type ComparisonProps = Widget & {
  header?: Header;
  columns: Array<Column>;
};

export type StatsProps = Widget & {
  items: Array<Item>;
};

export type SocialProofProps = Widget & {
  images: Array<Image>;
};

export type ContactProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

export type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

export type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};
