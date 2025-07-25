import { neonClient, handleNeonError } from '../lib/neonClient';
import { Lead, Quote, ContactForm, QuoteRequest } from '../types';

export const leadService = {
  // Create a new lead from contact form
  async createLead(formData: ContactForm): Promise<Lead> {
    try {
      const { data, error } = await neonClient
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          source: formData.source || 'website',
          status: 'new',
        })
        .select()
        .single();

      if (error) throw error;
      return {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        source: data.source,
        status: data.status,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
    } catch (error) {
      handleNeonError(error);
      throw error;
    }
  },

  // Create a quote request
  async createQuoteRequest(quoteData: QuoteRequest): Promise<Quote> {
    try {
      const { data, error } = await neonClient
        .from('quotes')
        .insert({
          name: quoteData.name,
          email: quoteData.email,
          phone: quoteData.phone,
          company: quoteData.company,
          project_details: quoteData.projectDetails,
          products: quoteData.products,
          deadline: quoteData.deadline,
          status: 'pending',
        })
        .select()
        .single();

      if (error) throw error;
      return {
        id: data.id,
        leadId: data.lead_id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        projectDetails: data.project_details,
        products: data.products,
        deadline: data.deadline,
        status: data.status,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
    } catch (error) {
      handleNeonError(error);
      throw error;
    }
  },

  // Get all leads (admin only)
  async getLeads(): Promise<Lead[]> {
    try {
      const { data, error } = await neonClient
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []).map((lead) => ({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        message: lead.message,
        source: lead.source,
        status: lead.status,
        createdAt: lead.created_at,
        updatedAt: lead.updated_at,
      }));
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get all quotes (admin only)
  async getQuotes(): Promise<Quote[]> {
    try {
      const { data, error } = await neonClient
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []).map((quote) => ({
        id: quote.id,
        leadId: quote.lead_id,
        name: quote.name,
        email: quote.email,
        phone: quote.phone,
        company: quote.company,
        projectDetails: quote.project_details,
        products: quote.products,
        deadline: quote.deadline,
        status: quote.status,
        createdAt: quote.created_at,
        updatedAt: quote.updated_at,
      }));
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Update lead status
  async updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
    try {
      const { error } = await neonClient
        .from('leads')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      handleNeonError(error);
      throw error;
    }
  },
};