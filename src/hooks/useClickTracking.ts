import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Generate a session ID that persists for the browser session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export const useClickTracking = () => {
  useEffect(() => {
    const trackClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Get element information
      const elementType = target.tagName.toLowerCase();
      const elementText = target.textContent?.trim().substring(0, 100) || null;
      const elementId = target.id || null;
      const elementClass = target.className || null;
      
      // Get viewport information
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Get click coordinates
      const clickX = event.clientX;
      const clickY = event.clientY;
      
      // Prepare click data
      const clickData = {
        element_type: elementType,
        element_text: elementText,
        element_id: elementId,
        element_class: elementClass,
        page_url: window.location.href,
        session_id: getSessionId(),
        user_agent: navigator.userAgent,
        viewport_width: viewportWidth,
        viewport_height: viewportHeight,
        click_x: clickX,
        click_y: clickY,
      };
      
      try {
        // Insert click data into Supabase
        const { error } = await supabase
          .from('click_events')
          .insert(clickData);
        
        if (error) {
          console.error('Error tracking click:', error);
        }
      } catch (error) {
        console.error('Error tracking click:', error);
      }
    };

    // Add click event listener to document
    document.addEventListener('click', trackClick);

    // Cleanup function
    return () => {
      document.removeEventListener('click', trackClick);
    };
  }, []);
};