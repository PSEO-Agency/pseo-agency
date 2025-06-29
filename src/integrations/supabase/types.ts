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
          category: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          image_url: string | null
          is_published: boolean | null
          published_at: string | null
          read_time: string | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          published_at?: string | null
          read_time?: string | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          published_at?: string | null
          read_time?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
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
          created_at: string | null
          description: string | null
          features: Json | null
          icon: string | null
          id: string
          is_featured: boolean | null
          sort_order: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          features?: Json | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          sort_order?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          features?: Json | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          sort_order?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string | null
          created_at: string | null
          id: string
          image_url: string | null
          is_visible: boolean | null
          linkedin_url: string | null
          name: string
          position: string | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_visible?: boolean | null
          linkedin_url?: string | null
          name: string
          position?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_visible?: boolean | null
          linkedin_url?: string | null
          name?: string
          position?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          client_name: string
          company: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          rating: number | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          client_name: string
          company?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          rating?: number | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          client_name?: string
          company?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          rating?: number | null
          sort_order?: number | null
          updated_at?: string | null
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
