export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          featured_image_alt: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          is_published: boolean | null
          published_at: string | null
          read_count: number | null
          read_time: string | null
          slug: string
          tags: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured_image_alt?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          published_at?: string | null
          read_count?: number | null
          read_time?: string | null
          slug: string
          tags?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured_image_alt?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          published_at?: string | null
          read_count?: number | null
          read_time?: string | null
          slug?: string
          tags?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["id"]
          },
        ]
      }
      case_studies: {
        Row: {
          challenge: string | null
          client_name: string
          created_at: string | null
          gallery_images: Json | null
          id: string
          image_url: string | null
          industry: string | null
          is_featured: boolean | null
          is_published: boolean | null
          metrics: Json | null
          results: string | null
          service_ids: Json | null
          slug: string
          solution: string | null
          sort_order: number | null
          tags: Json | null
          testimonial_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          challenge?: string | null
          client_name: string
          created_at?: string | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          industry?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          metrics?: Json | null
          results?: string | null
          service_ids?: Json | null
          slug: string
          solution?: string | null
          sort_order?: number | null
          tags?: Json | null
          testimonial_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          challenge?: string | null
          client_name?: string
          created_at?: string | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          industry?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          metrics?: Json | null
          results?: string | null
          service_ids?: Json | null
          slug?: string
          solution?: string | null
          sort_order?: number | null
          tags?: Json | null
          testimonial_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_case_studies_testimonial"
            columns: ["testimonial_id"]
            isOneToOne: false
            referencedRelation: "testimonials"
            referencedColumns: ["id"]
          },
        ]
      }
      content_fields: {
        Row: {
          created_at: string | null
          field_key: string
          field_type: string
          field_value: string | null
          id: string
          section_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          field_key: string
          field_type?: string
          field_value?: string | null
          id?: string
          section_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          field_key?: string
          field_type?: string
          field_value?: string | null
          id?: string
          section_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_fields_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string | null
          id: string
          is_visible: boolean | null
          question: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          question: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          question?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      industries: {
        Row: {
          case_study_ids: Json | null
          created_at: string | null
          description: string | null
          hero_image_url: string | null
          icon: string | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          pain_points: Json | null
          slug: string
          solutions: Json | null
          sort_order: number | null
          stats: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          case_study_ids?: Json | null
          created_at?: string | null
          description?: string | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          pain_points?: Json | null
          slug: string
          solutions?: Json | null
          sort_order?: number | null
          stats?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          case_study_ids?: Json | null
          created_at?: string | null
          description?: string | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          pain_points?: Json | null
          slug?: string
          solutions?: Json | null
          sort_order?: number | null
          stats?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          benefits: Json | null
          created_at: string | null
          department: string | null
          description: string | null
          employment_type: string | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          location: string | null
          meta_description: string | null
          meta_title: string | null
          requirements: Json | null
          responsibilities: Json | null
          salary_range: string | null
          slug: string
          sort_order: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          benefits?: Json | null
          created_at?: string | null
          department?: string | null
          description?: string | null
          employment_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          location?: string | null
          meta_description?: string | null
          meta_title?: string | null
          requirements?: Json | null
          responsibilities?: Json | null
          salary_range?: string | null
          slug: string
          sort_order?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          benefits?: Json | null
          created_at?: string | null
          department?: string | null
          description?: string | null
          employment_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          location?: string | null
          meta_description?: string | null
          meta_title?: string | null
          requirements?: Json | null
          responsibilities?: Json | null
          salary_range?: string | null
          slug?: string
          sort_order?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      navigation_items: {
        Row: {
          created_at: string | null
          id: string
          is_visible: boolean | null
          label: string
          parent_id: string | null
          sort_order: number | null
          updated_at: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          label: string
          parent_id?: string | null
          sort_order?: number | null
          updated_at?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          label?: string
          parent_id?: string | null
          sort_order?: number | null
          updated_at?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "navigation_items_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "navigation_items"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          created_at: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          meta_title: string | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          content: string | null
          created_at: string | null
          description: string | null
          difficulty_level: string | null
          download_count: number | null
          download_url: string | null
          duration: string | null
          file_size: string | null
          id: string
          is_featured: boolean | null
          is_gated: boolean | null
          is_published: boolean | null
          slug: string
          sort_order: number | null
          tags: Json | null
          thumbnail_url: string | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          download_count?: number | null
          download_url?: string | null
          duration?: string | null
          file_size?: string | null
          id?: string
          is_featured?: boolean | null
          is_gated?: boolean | null
          is_published?: boolean | null
          slug: string
          sort_order?: number | null
          tags?: Json | null
          thumbnail_url?: string | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          download_count?: number | null
          download_url?: string | null
          duration?: string | null
          file_size?: string | null
          id?: string
          is_featured?: boolean | null
          is_gated?: boolean | null
          is_published?: boolean | null
          slug?: string
          sort_order?: number | null
          tags?: Json | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sections: {
        Row: {
          created_at: string | null
          id: string
          is_visible: boolean | null
          page_id: string | null
          section_key: string
          section_type: string
          sort_order: number | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          page_id?: string | null
          section_key: string
          section_type: string
          sort_order?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_visible?: boolean | null
          page_id?: string | null
          section_key?: string
          section_type?: string
          sort_order?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          case_study_ids: Json | null
          created_at: string | null
          description: string | null
          faq_ids: Json | null
          features: Json | null
          hero_image_url: string | null
          icon: string | null
          id: string
          is_featured: boolean | null
          pricing_tiers: Json | null
          process_steps: Json | null
          slug: string | null
          sort_order: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          case_study_ids?: Json | null
          created_at?: string | null
          description?: string | null
          faq_ids?: Json | null
          features?: Json | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          pricing_tiers?: Json | null
          process_steps?: Json | null
          slug?: string | null
          sort_order?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          case_study_ids?: Json | null
          created_at?: string | null
          description?: string | null
          faq_ids?: Json | null
          features?: Json | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          pricing_tiers?: Json | null
          process_steps?: Json | null
          slug?: string | null
          sort_order?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          key: string
          type: string | null
          updated_at: string | null
          value: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key: string
          type?: string | null
          updated_at?: string | null
          value?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key?: string
          type?: string | null
          updated_at?: string | null
          value?: string | null
        }
        Relationships: []
      }
      social_media_visuals: {
        Row: {
          created_at: string
          description: string | null
          download_count: number | null
          format: string
          generated_images: Json | null
          height: number
          html_variations: Json
          id: string
          is_published: boolean | null
          slug: string
          sort_order: number | null
          template_data: Json
          title: string
          updated_at: string
          width: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          download_count?: number | null
          format: string
          generated_images?: Json | null
          height: number
          html_variations?: Json
          id?: string
          is_published?: boolean | null
          slug: string
          sort_order?: number | null
          template_data?: Json
          title: string
          updated_at?: string
          width: number
        }
        Update: {
          created_at?: string
          description?: string | null
          download_count?: number | null
          format?: string
          generated_images?: Json | null
          height?: number
          html_variations?: Json
          id?: string
          is_published?: boolean | null
          slug?: string
          sort_order?: number | null
          template_data?: Json
          title?: string
          updated_at?: string
          width?: number
        }
        Relationships: []
      }
      software: {
        Row: {
          category: string | null
          content: string | null
          created_at: string | null
          demo_url: string | null
          description: string | null
          difficulty_level: string | null
          documentation_url: string | null
          features: Json | null
          github_url: string | null
          id: string
          image_url: string | null
          integration_capabilities: Json | null
          is_featured: boolean | null
          is_published: boolean | null
          meta_description: string | null
          meta_title: string | null
          popularity_score: number | null
          pricing_info: Json | null
          review_count: number | null
          setup_time: string | null
          slug: string
          sort_order: number | null
          tags: Json | null
          target_audience: string | null
          technical_specs: Json | null
          title: string
          type: string
          updated_at: string | null
          use_cases: Json | null
          user_rating: number | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          difficulty_level?: string | null
          documentation_url?: string | null
          features?: Json | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          integration_capabilities?: Json | null
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          popularity_score?: number | null
          pricing_info?: Json | null
          review_count?: number | null
          setup_time?: string | null
          slug: string
          sort_order?: number | null
          tags?: Json | null
          target_audience?: string | null
          technical_specs?: Json | null
          title: string
          type?: string
          updated_at?: string | null
          use_cases?: Json | null
          user_rating?: number | null
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          difficulty_level?: string | null
          documentation_url?: string | null
          features?: Json | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          integration_capabilities?: Json | null
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          popularity_score?: number | null
          pricing_info?: Json | null
          review_count?: number | null
          setup_time?: string | null
          slug?: string
          sort_order?: number | null
          tags?: Json | null
          target_audience?: string | null
          technical_specs?: Json | null
          title?: string
          type?: string
          updated_at?: string | null
          use_cases?: Json | null
          user_rating?: number | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          achievements: Json | null
          bio: string | null
          created_at: string | null
          email: string | null
          expertise: Json | null
          id: string
          image_url: string | null
          is_visible: boolean | null
          linkedin_url: string | null
          name: string
          phone: string | null
          position: string | null
          slug: string | null
          social_links: Json | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          achievements?: Json | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          expertise?: Json | null
          id?: string
          image_url?: string | null
          is_visible?: boolean | null
          linkedin_url?: string | null
          name: string
          phone?: string | null
          position?: string | null
          slug?: string | null
          social_links?: Json | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          achievements?: Json | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          expertise?: Json | null
          id?: string
          image_url?: string | null
          is_visible?: boolean | null
          linkedin_url?: string | null
          name?: string
          phone?: string | null
          position?: string | null
          slug?: string | null
          social_links?: Json | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          category: string | null
          client_name: string
          company: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          location: string | null
          rating: number | null
          sort_order: number | null
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          category?: string | null
          client_name: string
          company?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          rating?: number | null
          sort_order?: number | null
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          category?: string | null
          client_name?: string
          company?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          rating?: number | null
          sort_order?: number | null
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
