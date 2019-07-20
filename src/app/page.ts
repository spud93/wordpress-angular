export interface Page {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: 'published' | 'future' | 'draft' | 'pending' | 'trash' | 'auto-draft' | 'inherit';
  type: string;
  link: string;
  title: {
    rendered: string
  };
  content: {
    rendered: string,
    protected: boolean
  };
  excerpt: {
    rendered: string
    protected: boolean
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  commented_status: 'closed' | 'open';
  ping_status: 'closed' | 'open';
  template: string;
  meta: any[];
}
