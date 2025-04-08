import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { TEST_IDS } from '../../constants/testIds';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { colors } from '../../theme/colors';

interface WebViewContentProps {
  url: string;
  title?: string;
}

export const WebViewContent = ({ url, title }: WebViewContentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle YouTube URLs by converting them to embed format
  const getSource = () => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      // Extract video ID from various YouTube URL formats
      let videoId = '';
      
      // Handle youtu.be format
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } 
      // Handle youtube.com/watch?v= format
      else if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v') || '';
      }
      // Handle youtube.com/embed/ format
      else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1].split('?')[0];
      }
      
      if (videoId) {
        // Return HTML content with responsive iframe
        return {
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <style>
                  body, html {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-color: ${colors.base.black};
                  }
                  .video-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  iframe {
                    width: 100%;
                    height: 100%;
                    border: 0;
                  }
                </style>
              </head>
              <body>
                <div class="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&showinfo=0&modestbranding=1&controls=1" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
                </div>
              </body>
            </html>
          `
        };
      }
    }
    
    // Default to using the URL directly
    return { uri: url };
  };

  return (
    <View style={styles.container} testID={TEST_IDS.WEBVIEW_CONTENT}>
      {isLoading && <ActivityIndicator />}
      
      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Failed to load content. Please try again later.
          </Text>
        </View>
      ) : (
        <WebView
          source={getSource()}
          style={styles.webview}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowsFullscreenVideo={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          originWhitelist={['*']}
          mixedContentMode="compatibility"
          cacheEnabled={true}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          scrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base.white,
  },
  webview: {
    flex: 1,
    backgroundColor: colors.base.white,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: colors.base.grayDark,
    fontSize: 16,
    textAlign: 'center',
  },
});
