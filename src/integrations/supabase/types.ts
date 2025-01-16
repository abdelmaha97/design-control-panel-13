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
      ad_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      ad_placements: {
        Row: {
          ad_id: string | null
          created_at: string | null
          end_date: string
          id: string
          page: string
          position: string
          start_date: string
        }
        Insert: {
          ad_id?: string | null
          created_at?: string | null
          end_date: string
          id?: string
          page: string
          position: string
          start_date: string
        }
        Update: {
          ad_id?: string | null
          created_at?: string | null
          end_date?: string
          id?: string
          page?: string
          position?: string
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "ad_placements_ad_id_fkey"
            columns: ["ad_id"]
            isOneToOne: false
            referencedRelation: "ads"
            referencedColumns: ["id"]
          },
        ]
      }
      admin: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          id: string
          password: string
          phone_number: string
          user_type: string
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          password: string
          phone_number: string
          user_type: string
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          password?: string
          phone_number?: string
          user_type?: string
          username?: string
        }
        Relationships: []
      }
      ads: {
        Row: {
          contact_info: string
          content: string
          created_at: string | null
          description: string
          discount: string | null
          end_date: string
          id: string
          image_url: string
          name: string
          service_link: string
          start_date: string
          status: Database["public"]["Enums"]["ad_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          contact_info: string
          content: string
          created_at?: string | null
          description: string
          discount?: string | null
          end_date: string
          id?: string
          image_url: string
          name: string
          service_link: string
          start_date: string
          status?: Database["public"]["Enums"]["ad_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          contact_info?: string
          content?: string
          created_at?: string | null
          description?: string
          discount?: string | null
          end_date?: string
          id?: string
          image_url?: string
          name?: string
          service_link?: string
          start_date?: string
          status?: Database["public"]["Enums"]["ad_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      auction_bids: {
        Row: {
          auction_id: string | null
          bank_guarantee_date: string | null
          bank_guarantee_number: string | null
          bank_guarantee_url: string
          bid_amount: number
          bid_amount_url: string
          bid_time: string | null
          created_by: string | null
          id: string
          payment_id: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          status: Database["public"]["Enums"]["bid_status"] | null
          updated_at: string | null
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          auction_id?: string | null
          bank_guarantee_date?: string | null
          bank_guarantee_number?: string | null
          bank_guarantee_url: string
          bid_amount: number
          bid_amount_url: string
          bid_time?: string | null
          created_by?: string | null
          id?: string
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          status?: Database["public"]["Enums"]["bid_status"] | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          auction_id?: string | null
          bank_guarantee_date?: string | null
          bank_guarantee_number?: string | null
          bank_guarantee_url?: string
          bid_amount?: number
          bid_amount_url?: string
          bid_time?: string | null
          created_by?: string | null
          id?: string
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          status?: Database["public"]["Enums"]["bid_status"] | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auction_bids_auction_id_fkey"
            columns: ["auction_id"]
            isOneToOne: false
            referencedRelation: "auctions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auction_bids_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auction_bids_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auction_bids_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      auctions: {
        Row: {
          auction_number: string
          created_at: string | null
          current_price: number
          description: string
          end_date: string
          id: string
          image_path: string[] | null
          item_condition: string[] | null
          notes: string[] | null
          organization_id: string | null
          rules: string[] | null
          start_date: string
          starting_price: number
          status: Database["public"]["Enums"]["auction_status"] | null
          subscription_price: number
          title: string
          updated_at: string | null
        }
        Insert: {
          auction_number: string
          created_at?: string | null
          current_price: number
          description: string
          end_date: string
          id?: string
          image_path?: string[] | null
          item_condition?: string[] | null
          notes?: string[] | null
          organization_id?: string | null
          rules?: string[] | null
          start_date: string
          starting_price: number
          status?: Database["public"]["Enums"]["auction_status"] | null
          subscription_price: number
          title: string
          updated_at?: string | null
        }
        Update: {
          auction_number?: string
          created_at?: string | null
          current_price?: number
          description?: string
          end_date?: string
          id?: string
          image_path?: string[] | null
          item_condition?: string[] | null
          notes?: string[] | null
          organization_id?: string | null
          rules?: string[] | null
          start_date?: string
          starting_price?: number
          status?: Database["public"]["Enums"]["auction_status"] | null
          subscription_price?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auctions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      company_profiles: {
        Row: {
          address: string | null
          business_name: string
          city: string | null
          commercial_reg_no: string
          company_size: string | null
          created_at: string | null
          id: string
          industry: string | null
          tax_number: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          business_name: string
          city?: string | null
          commercial_reg_no: string
          company_size?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          tax_number?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          business_name?: string
          city?: string | null
          commercial_reg_no?: string
          company_size?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          tax_number?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      individual_profiles: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          date_of_birth: string | null
          education_level: string | null
          id: string
          national_id: string
          occupation: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          education_level?: string | null
          id?: string
          national_id: string
          occupation?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          education_level?: string | null
          id?: string
          national_id?: string
          occupation?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "individual_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          application_date: string | null
          cover_letter: string | null
          id: string
          job_id: string | null
          resume_url: string
          review_notes: string | null
          status: Database["public"]["Enums"]["application_status"] | null
          user_id: string | null
        }
        Insert: {
          application_date?: string | null
          cover_letter?: string | null
          id?: string
          job_id?: string | null
          resume_url: string
          review_notes?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          user_id?: string | null
        }
        Update: {
          application_date?: string | null
          cover_letter?: string | null
          id?: string
          job_id?: string | null
          resume_url?: string
          review_notes?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          benefits: string[] | null
          created_at: string | null
          deadline: string
          description: string
          id: string
          image_path: string | null
          job_number: string
          location: string
          notes: string | null
          organization_id: string | null
          requirements: string[] | null
          salary_range: string | null
          status: Database["public"]["Enums"]["job_status"] | null
          title: string
          type: Database["public"]["Enums"]["job_type"]
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          created_at?: string | null
          deadline: string
          description: string
          id?: string
          image_path?: string | null
          job_number: string
          location: string
          notes?: string | null
          organization_id?: string | null
          requirements?: string[] | null
          salary_range?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          title: string
          type: Database["public"]["Enums"]["job_type"]
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          created_at?: string | null
          deadline?: string
          description?: string
          id?: string
          image_path?: string | null
          job_number?: string
          location?: string
          notes?: string | null
          organization_id?: string | null
          requirements?: string[] | null
          salary_range?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          title?: string
          type?: Database["public"]["Enums"]["job_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      news: {
        Row: {
          author_id: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          published_at: string | null
          status: Database["public"]["Enums"]["news_status"] | null
          title: string
          type: Database["public"]["Enums"]["news_type"]
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["news_status"] | null
          title: string
          type: Database["public"]["Enums"]["news_type"]
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["news_status"] | null
          title?: string
          type?: Database["public"]["Enums"]["news_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: number
          message: string
          status: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          message: string
          status?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          message?: string
          status?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          item_id: string
          payment_method: string
          status: Database["public"]["Enums"]["payment_status"] | null
          submission_id: string
          transaction_id: string
          type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          item_id: string
          payment_method: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          submission_id: string
          transaction_id: string
          type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          item_id?: string
          payment_method?: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          submission_id?: string
          transaction_id?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      permissions: {
        Row: {
          description: string
          id: number
          permission_name: string
        }
        Insert: {
          description: string
          id?: number
          permission_name: string
        }
        Update: {
          description?: string
          id?: number
          permission_name?: string
        }
        Relationships: []
      }
      project_updates: {
        Row: {
          description: string
          id: string
          image_paths: string[] | null
          progress: number
          project_id: string | null
          title: string
          update_date: string | null
        }
        Insert: {
          description: string
          id?: string
          image_paths?: string[] | null
          progress: number
          project_id?: string | null
          title: string
          update_date?: string | null
        }
        Update: {
          description?: string
          id?: string
          image_paths?: string[] | null
          progress?: number
          project_id?: string | null
          title?: string
          update_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_updates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          budget: number
          contractor_id: string | null
          created_at: string | null
          description: string
          end_date: string
          expected_outcomes: string[] | null
          financial_details: string[] | null
          id: string
          image_paths: string[] | null
          location: string
          notes: string[] | null
          owner_id: string | null
          progress: number | null
          project_number: string
          reports: string[] | null
          risks: string[] | null
          start_date: string
          status: string
          team: string[] | null
          title: string
          tools: string[] | null
          type: string
          updated_at: string | null
        }
        Insert: {
          budget: number
          contractor_id?: string | null
          created_at?: string | null
          description: string
          end_date: string
          expected_outcomes?: string[] | null
          financial_details?: string[] | null
          id?: string
          image_paths?: string[] | null
          location: string
          notes?: string[] | null
          owner_id?: string | null
          progress?: number | null
          project_number: string
          reports?: string[] | null
          risks?: string[] | null
          start_date: string
          status: string
          team?: string[] | null
          title: string
          tools?: string[] | null
          type: string
          updated_at?: string | null
        }
        Update: {
          budget?: number
          contractor_id?: string | null
          created_at?: string | null
          description?: string
          end_date?: string
          expected_outcomes?: string[] | null
          financial_details?: string[] | null
          id?: string
          image_paths?: string[] | null
          location?: string
          notes?: string[] | null
          owner_id?: string | null
          progress?: number | null
          project_number?: string
          reports?: string[] | null
          risks?: string[] | null
          start_date?: string
          status?: string
          team?: string[] | null
          title?: string
          tools?: string[] | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      results: {
        Row: {
          amount: number | null
          created_at: string | null
          criteria: string
          date: string
          description: string
          entity: string
          id: string
          image_path: string | null
          location: string | null
          notes: string | null
          selected_candidates: Json | null
          selection_method: string
          status: Database["public"]["Enums"]["result_status"] | null
          title: string
          type: Database["public"]["Enums"]["result_type"]
          updated_at: string | null
          winner: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          criteria: string
          date: string
          description: string
          entity: string
          id?: string
          image_path?: string | null
          location?: string | null
          notes?: string | null
          selected_candidates?: Json | null
          selection_method: string
          status?: Database["public"]["Enums"]["result_status"] | null
          title: string
          type: Database["public"]["Enums"]["result_type"]
          updated_at?: string | null
          winner?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          criteria?: string
          date?: string
          description?: string
          entity?: string
          id?: string
          image_path?: string | null
          location?: string | null
          notes?: string | null
          selected_candidates?: Json | null
          selection_method?: string
          status?: Database["public"]["Enums"]["result_status"] | null
          title?: string
          type?: Database["public"]["Enums"]["result_type"]
          updated_at?: string | null
          winner?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: number
          permission_id: number | null
          role_name: string
        }
        Insert: {
          id?: number
          permission_id?: number | null
          role_name: string
        }
        Update: {
          id?: number
          permission_id?: number | null
          role_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      tender_submissions: {
        Row: {
          bank_guarantee_date: string | null
          bank_guarantee_number: string | null
          bank_guarantee_url: string
          created_by: string | null
          financial_file_url: string | null
          financial_score: number | null
          id: string
          notes: string | null
          payment_id: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          status: Database["public"]["Enums"]["submission_status"] | null
          submission_date: string | null
          technical_file_url: string | null
          technical_score: number | null
          tender_id: string | null
          updated_at: string | null
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          bank_guarantee_date?: string | null
          bank_guarantee_number?: string | null
          bank_guarantee_url: string
          created_by?: string | null
          financial_file_url?: string | null
          financial_score?: number | null
          id?: string
          notes?: string | null
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          status?: Database["public"]["Enums"]["submission_status"] | null
          submission_date?: string | null
          technical_file_url?: string | null
          technical_score?: number | null
          tender_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          bank_guarantee_date?: string | null
          bank_guarantee_number?: string | null
          bank_guarantee_url?: string
          created_by?: string | null
          financial_file_url?: string | null
          financial_score?: number | null
          id?: string
          notes?: string | null
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          status?: Database["public"]["Enums"]["submission_status"] | null
          submission_date?: string | null
          technical_file_url?: string | null
          technical_score?: number | null
          tender_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tender_submissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tender_submissions_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tender_submissions_tender_id_fkey"
            columns: ["tender_id"]
            isOneToOne: false
            referencedRelation: "tenders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tender_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tenders: {
        Row: {
          budget: number
          category: Database["public"]["Enums"]["tender_category"]
          created_at: string | null
          description: string
          document: string
          id: string
          image_path: string | null
          notes: string[] | null
          organization_id: string | null
          region: string | null
          status: Database["public"]["Enums"]["tender_status"] | null
          submission_deadline: string
          submission_fees: number | null
          tender_number: string
          title: string
          updated_at: string | null
        }
        Insert: {
          budget: number
          category: Database["public"]["Enums"]["tender_category"]
          created_at?: string | null
          description: string
          document: string
          id?: string
          image_path?: string | null
          notes?: string[] | null
          organization_id?: string | null
          region?: string | null
          status?: Database["public"]["Enums"]["tender_status"] | null
          submission_deadline: string
          submission_fees?: number | null
          tender_number: string
          title: string
          updated_at?: string | null
        }
        Update: {
          budget?: number
          category?: Database["public"]["Enums"]["tender_category"]
          created_at?: string | null
          description?: string
          document?: string
          id?: string
          image_path?: string | null
          notes?: string[] | null
          organization_id?: string | null
          region?: string | null
          status?: Database["public"]["Enums"]["tender_status"] | null
          submission_deadline?: string
          submission_fees?: number | null
          tender_number?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          name: string
          phone: string | null
          photo_url: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          status: Database["public"]["Enums"]["user_status"] | null
          type: Database["public"]["Enums"]["user_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          name: string
          phone?: string | null
          photo_url?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: Database["public"]["Enums"]["user_status"] | null
          type: Database["public"]["Enums"]["user_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          name?: string
          phone?: string | null
          photo_url?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: Database["public"]["Enums"]["user_status"] | null
          type?: Database["public"]["Enums"]["user_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      rollback_transaction: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      ad_status: "active" | "inactive"
      application_status:
        | "pending"
        | "under_review"
        | "shortlisted"
        | "accepted"
        | "rejected"
      auction_status: "draft" | "active" | "closed" | "cancelled"
      bid_status: "active" | "outbid" | "won" | "lost"
      job_status: "draft" | "published" | "closed" | "cancelled"
      job_type: "full_time" | "part_time" | "contract" | "temporary"
      news_status: "published" | "draft" | "archived"
      news_type: "tender" | "auction" | "job" | "project"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      project_status: "planning" | "active" | "completed" | "cancelled"
      project_type:
        | "infrastructure"
        | "energy"
        | "transportation"
        | "water"
        | "education"
      result_status: "published" | "draft" | "archived"
      result_type: "tender" | "auction" | "job"
      submission_status: "pending" | "under_review" | "accepted" | "rejected"
      tender_category: "government" | "private" | "individual"
      tender_status:
        | "draft"
        | "published"
        | "under_review"
        | "closed"
        | "awarded"
        | "cancelled"
      user_role: "admin" | "user"
      user_status: "active" | "inactive" | "suspended"
      user_type: "individual" | "company"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never