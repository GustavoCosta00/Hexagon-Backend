import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
    icon: 'landscape';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHeroMainSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_main_sections';
  info: {
    displayName: 'HeroMainSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    teste: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeroMainSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_main_section_contents';
  info: {
    displayName: 'HeroMainSectionContent';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'rocket';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    publicado_em: Schema.Attribute.Date;
    sloganCard: Schema.Attribute.Component<'home.sub-slogan', false>;
    slug: Schema.Attribute.String;
    statusAct: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pages';
  info: {
    displayName: 'HomePage';
    icon: 'house';
  };
  attributes: {
    descricao: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSubSlogan extends Struct.ComponentSchema {
  collectionName: 'components_home_sub_slogans';
  info: {
    displayName: 'subSlogan';
    icon: 'grid';
  };
  attributes: {
    icon1: Schema.Attribute.Media<'images'>;
    icon2: Schema.Attribute.Media<'images'>;
    icon3: Schema.Attribute.Media<'images'>;
    subSloganTitle1: Schema.Attribute.String;
    subSloganTitle2: Schema.Attribute.String;
    subSloganTitle3: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.banner': HomeBanner;
      'home.hero-main-section': HomeHeroMainSection;
      'home.hero-main-section-content': HomeHeroMainSectionContent;
      'home.hero-section': HomeHeroSection;
      'home.home-page': HomeHomePage;
      'home.sub-slogan': HomeSubSlogan;
    }
  }
}
