// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CaseStudyDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Case Study documents
 */
interface CaseStudyDocumentData {
	/**
	 * Company field in *Case Study*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_study.company
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	company: prismic.TitleField;

	/**
	 * Description field in *Case Study*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_study.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *Case Study*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_study.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Slice Zone field in *Case Study*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_study.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<CaseStudyDocumentDataSlicesSlice> /**
	 * Meta Title field in *Case Study*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: case_study.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Case Study*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: case_study.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Case Study*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_study.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Case Study document from Prismic
 *
 * - **API ID**: `case_study`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudyDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<CaseStudyDocumentData>,
	'case_study',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| CallToActionSlice
	| IntegrationsSlice
	| CaseStudiesSlice
	| ShowcaseSlice
	| BentoSlice
	| HeroSlice
	| RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
	/**
	 * Link field in *Settings → Navigation*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Navigation*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;

	/**
	 * CTA Button field in *Settings → Navigation*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: settings.navigation[].cta_button
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	cta_button: prismic.BooleanField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;

	/**
	 * Navigation field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = CaseStudyDocument | PageDocument | SettingsDocument;

/**
 * Item in *Bento → Default → Primary → Box*
 */
export interface BentoSliceDefaultPrimaryBoxItem {
	/**
	 * Title field in *Bento → Default → Primary → Box*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.box[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Body field in *Bento → Default → Primary → Box*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.box[].body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Image field in *Bento → Default → Primary → Box*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.box[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Wide field in *Bento → Default → Primary → Box*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: bento.default.primary.box[].wide
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	wide: prismic.BooleanField;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
	/**
	 * Heading field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Italic for gold text
	 * - **API ID Path**: bento.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Body field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Box field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.box[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	box: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryBoxItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BentoSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<'bento', BentoSliceVariation>;

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
	/**
	 * Heading field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Button Link field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Label field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CallToActionSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<'call_to_action', CallToActionSliceVariation>;

/**
 * Item in *CaseStudies → Default → Primary → Case Studies*
 */
export interface CaseStudiesSliceDefaultPrimaryCaseStudiesItem {
	/**
	 * Case Study field in *CaseStudies → Default → Primary → Case Studies*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_studies.default.primary.case_studies[].case_study
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	case_study: prismic.ContentRelationshipField<'case_study'>;
}

/**
 * Primary content in *CaseStudies → Default → Primary*
 */
export interface CaseStudiesSliceDefaultPrimary {
	/**
	 * Heading field in *CaseStudies → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_studies.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Body field in *CaseStudies → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_studies.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Case Studies field in *CaseStudies → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case_studies.default.primary.case_studies[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	case_studies: prismic.GroupField<Simplify<CaseStudiesSliceDefaultPrimaryCaseStudiesItem>>;
}

/**
 * Default variation for CaseStudies Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CaseStudiesSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *CaseStudies*
 */
type CaseStudiesSliceVariation = CaseStudiesSliceDefault;

/**
 * CaseStudies Shared Slice
 *
 * - **API ID**: `case_studies`
 * - **Description**: CaseStudies
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSlice = prismic.SharedSlice<'case_studies', CaseStudiesSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Heading field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Body field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Button Link field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Label field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *Integrations → Default → Primary → icons*
 */
export interface IntegrationsSliceDefaultPrimaryIconsItem {
	/**
	 * icon field in *Integrations → Default → Primary → icons*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: integrations.default.primary.icons[].icon
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	icon: prismic.SelectField<'cloudflare' | 'npm' | 'github' | 'figma' | 'digitalocean' | 'fly'>;
}

/**
 * Primary content in *Integrations → Default → Primary*
 */
export interface IntegrationsSliceDefaultPrimary {
	/**
	 * Heading field in *Integrations → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: integrations.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Body field in *Integrations → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: integrations.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * icons field in *Integrations → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: integrations.default.primary.icons[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	icons: prismic.GroupField<Simplify<IntegrationsSliceDefaultPrimaryIconsItem>>;
}

/**
 * Default variation for Integrations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<IntegrationsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Integrations*
 */
type IntegrationsSliceVariation = IntegrationsSliceDefault;

/**
 * Integrations Shared Slice
 *
 * - **API ID**: `integrations`
 * - **Description**: Integrations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSlice = prismic.SharedSlice<'integrations', IntegrationsSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
	/**
	 * Heading field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Image field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Icon field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.icon
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	icon: prismic.SelectField<'gear' | 'cycle'>;

	/**
	 * Subheading field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.subheading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subheading: prismic.TitleField;

	/**
	 * Body field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Button Link field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Text field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ShowcaseSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Showcase → Reverse → Primary*
 */
export interface ShowcaseSliceReversePrimary {
	/**
	 * Heading field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Image field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Icon field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.icon
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	icon: prismic.SelectField<'gear' | 'cycle'>;

	/**
	 * Subheading field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.subheading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subheading: prismic.TitleField;

	/**
	 * Body field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Button Link field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Text field in *Showcase → Reverse → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reverse.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField;
}

/**
 * Reverse variation for Showcase Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceReverse = prismic.SharedSliceVariation<
	'reverse',
	Simplify<ShowcaseSliceReversePrimary>,
	never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReverse;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<'showcase', ShowcaseSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			CaseStudyDocument,
			CaseStudyDocumentData,
			CaseStudyDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavigationItem,
			AllDocumentTypes,
			BentoSlice,
			BentoSliceDefaultPrimaryBoxItem,
			BentoSliceDefaultPrimary,
			BentoSliceVariation,
			BentoSliceDefault,
			CallToActionSlice,
			CallToActionSliceDefaultPrimary,
			CallToActionSliceVariation,
			CallToActionSliceDefault,
			CaseStudiesSlice,
			CaseStudiesSliceDefaultPrimaryCaseStudiesItem,
			CaseStudiesSliceDefaultPrimary,
			CaseStudiesSliceVariation,
			CaseStudiesSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			IntegrationsSlice,
			IntegrationsSliceDefaultPrimaryIconsItem,
			IntegrationsSliceDefaultPrimary,
			IntegrationsSliceVariation,
			IntegrationsSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			ShowcaseSlice,
			ShowcaseSliceDefaultPrimary,
			ShowcaseSliceReversePrimary,
			ShowcaseSliceVariation,
			ShowcaseSliceDefault,
			ShowcaseSliceReverse
		};
	}
}
