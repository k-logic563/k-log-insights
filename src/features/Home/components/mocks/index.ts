export const urls = ['https://iwtttter.tech']

export const errorResponse = {
  error: {
    message: 'エラーが発生しました',
  }
}

export const response = {
  id: 'https://iwtttter.tech/',
  totalScore: 99,
  totalScoreColor: '#0c6',
  lighthouseResult: {
    audits: {
      'first-contentful-paint': {
        id: 'first-contentful-paint',
        title: 'First Contentful Paint',
        description:
          'First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: '0.3 s',
        numericValue: 294,
        numericUnit: 'millisecond',
        color: '#0c6',
      },
      'cumulative-layout-shift': {
        id: 'cumulative-layout-shift',
        title: 'Cumulative Layout Shift',
        description:
          'Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: '0.012',
        details: {
          type: 'debugdata',
          items: [
            {
              totalCumulativeLayoutShift: 0.01219057292122698,
              cumulativeLayoutShiftMainFrame: 0.01219057292122698,
            },
          ],
        },
        numericValue: 0.01219057292122698,
        numericUnit: 'unitless',
        color: '#0c6',
      },
      interactive: {
        id: 'interactive',
        title: 'Time to Interactive',
        description:
          'Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: '1.0 s',
        numericValue: 974,
        numericUnit: 'millisecond',
        color: '#0c6',
      },
      'speed-index': {
        id: 'speed-index',
        title: 'Speed Index',
        description:
          'Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: '0.4 s',
        numericValue: 375.98785546385204,
        numericUnit: 'millisecond',
        color: '#0c6',
      },
      'total-blocking-time': {
        id: 'total-blocking-time',
        title: 'Total Blocking Time',
        description:
          'Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).',
        score: 0.96,
        scoreDisplayMode: 'numeric',
        displayValue: '110 ms',
        numericValue: 107.5,
        numericUnit: 'millisecond',
        color: '#0c6',
      },
      'largest-contentful-paint': {
        id: 'largest-contentful-paint',
        title: 'Largest Contentful Paint',
        description:
          'Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: '0.4 s',
        numericValue: 381,
        numericUnit: 'millisecond',
        color: '#0c6',
      },
      'modern-image-formats': {
        id: 'modern-image-formats',
        title: 'Serve images in next-gen formats',
        description:
          'Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        displayValue: 'Potential savings of 332 KiB',
        details: {
          type: 'opportunity',
          headings: [
            {
              key: 'node',
              valueType: 'node',
            },
            {
              valueType: 'url',
              label: 'URL',
              key: 'url',
            },
            {
              label: 'Resource Size',
              key: 'totalBytes',
              valueType: 'bytes',
            },
            {
              valueType: 'bytes',
              key: 'wastedBytes',
              label: 'Potential Savings',
            },
          ],
          items: [
            {
              fromProtocol: true,
              totalBytes: 332049,
              isCrossOrigin: true,
              wastedWebpBytes: 199865,
              wastedBytes: 216326.4,
              url: 'https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/9aa3a61f525248f68530e9f03d0eeb21/database.jpg',
              node: {
                type: 'node',
                boundingRect: {
                  left: 179,
                  top: 345,
                  right: 453,
                  bottom: 500,
                  width: 274,
                  height: 154,
                },
                path: '1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,A,0,DIV,0,DIV,0,IMG',
                selector:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                lhId: 'page-2-IMG',
                nodeLabel:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                snippet:
                  '<img alt="" src="https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/…" class="chakra-image css-82faoh">',
              },
            },
            {
              fromProtocol: true,
              totalBytes: 184568,
              url: 'https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/acc638b12c1943e281a404c4fb277cd1/javascript.jpg',
              wastedBytes: 123655.45,
              wastedWebpBytes: 117396,
              node: {
                nodeLabel:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                snippet:
                  '<img alt="" src="https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/…" class="chakra-image css-82faoh">',
                type: 'node',
                path: '1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,5,A,0,DIV,0,DIV,0,IMG',
                selector:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                lhId: 'page-6-IMG',
                boundingRect: {
                  left: 179,
                  width: 274,
                  top: 1071,
                  bottom: 1226,
                  right: 453,
                  height: 154,
                },
              },
              isCrossOrigin: true,
            },
          ],
          overallSavingsBytes: 339981.85,
          overallSavingsMs: 0,
        },
        warnings: [],
        numericValue: 0,
        numericUnit: 'millisecond',
      },
      'uses-responsive-images': {
        id: 'uses-responsive-images',
        title: 'Properly size images',
        description:
          'Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).',
        score: 0.9,
        scoreDisplayMode: 'numeric',
        displayValue: 'Potential savings of 478 KiB',
        details: {
          headings: [
            {
              valueType: 'node',
              key: 'node',
            },
            {
              label: 'URL',
              key: 'url',
              valueType: 'url',
            },
            {
              label: 'Resource Size',
              valueType: 'bytes',
              key: 'totalBytes',
            },
            {
              label: 'Potential Savings',
              key: 'wastedBytes',
              valueType: 'bytes',
            },
          ],
          items: [
            {
              node: {
                path: '1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,A,0,DIV,0,DIV,0,IMG',
                snippet:
                  '<img alt="" src="https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/…" class="chakra-image css-82faoh">',
                selector:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                nodeLabel:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                type: 'node',
                boundingRect: {
                  height: 154,
                  top: 345,
                  right: 453,
                  width: 274,
                  left: 179,
                  bottom: 500,
                },
                lhId: 'page-2-IMG',
              },
              wastedBytes: 314751,
              wastedPercent: 94.79061728395062,
              totalBytes: 332049,
              url: 'https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/9aa3a61f525248f68530e9f03d0eeb21/database.jpg',
            },
            {
              totalBytes: 184568,
              wastedPercent: 94.79061728395062,
              url: 'https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/acc638b12c1943e281a404c4fb277cd1/javascript.jpg',
              wastedBytes: 174953,
              node: {
                path: '1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,A,0,DIV,0,DIV,0,IMG',
                boundingRect: {
                  bottom: 321,
                  height: 154,
                  right: 453,
                  left: 179,
                  top: 167,
                  width: 274,
                },
                nodeLabel:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                snippet:
                  '<img alt="" src="https://images.microcms-assets.io/assets/f01c2ab1219a4c9698b7ce958a43d96a/…" class="chakra-image css-82faoh">',
                type: 'node',
                selector:
                  'a.css-9q9wnm > div.chakra-stack > div.css-1eci5m2 > img.chakra-image',
                lhId: 'page-1-IMG',
              },
            },
          ],
          type: 'opportunity',
          overallSavingsMs: 120,
          overallSavingsBytes: 489704,
        },
        numericValue: 120,
        numericUnit: 'millisecond',
      },
      'offscreen-images': {
        id: 'offscreen-images',
        title: 'Defer offscreen images',
        description:
          'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        details: {
          type: 'opportunity',
          items: [],
          overallSavingsBytes: 0,
          overallSavingsMs: 0,
          headings: [],
        },
        warnings: [],
        numericValue: 0,
        numericUnit: 'millisecond',
      },
      'unused-javascript': {
        id: 'unused-javascript',
        title: 'Reduce unused JavaScript',
        description:
          'Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).',
        score: 0.89,
        scoreDisplayMode: 'numeric',
        displayValue: 'Potential savings of 157 KiB',
        details: {
          type: 'opportunity',
          headings: [
            {
              key: 'url',
              valueType: 'url',
              label: 'URL',
              subItemsHeading: {
                key: 'source',
                valueType: 'code',
              },
            },
            {
              label: 'Transfer Size',
              subItemsHeading: {
                key: 'sourceBytes',
              },
              valueType: 'bytes',
              key: 'totalBytes',
            },
            {
              subItemsHeading: {
                key: 'sourceWastedBytes',
              },
              key: 'wastedBytes',
              valueType: 'bytes',
              label: 'Potential Savings',
            },
          ],
          overallSavingsMs: 130,
          items: [
            {
              totalBytes: 142246,
              wastedPercent: 53.8194544491408,
              url: 'https://iwtttter.tech/_next/static/chunks/506-f33ecb42db7562c6.js',
              wastedBytes: 76556,
            },
            {
              wastedPercent: 88.4257051098604,
              wastedBytes: 55618,
              url: 'https://iwtttter.tech/_next/static/chunks/101-10e99b77b7623302.js',
              totalBytes: 62898,
            },
            {
              totalBytes: 72249,
              wastedBytes: 28328,
              wastedPercent: 39.20848572796509,
              url: 'https://www.googletagmanager.com/gtag/js?id=G-FMJGW0EEWB',
            },
          ],
          overallSavingsBytes: 160502,
        },
        numericValue: 130,
        numericUnit: 'millisecond',
      },
      'unused-css-rules': {
        id: 'unused-css-rules',
        title: 'Reduce unused CSS',
        description:
          'Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        details: {
          items: [],
          type: 'opportunity',
          overallSavingsBytes: 0,
          headings: [],
          overallSavingsMs: 0,
        },
        numericValue: 0,
        numericUnit: 'millisecond',
      },
      'unminified-css': {
        id: 'unminified-css',
        title: 'Minify CSS',
        description:
          'Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        details: {
          items: [],
          overallSavingsBytes: 0,
          headings: [],
          type: 'opportunity',
          overallSavingsMs: 0,
        },
        numericValue: 0,
        numericUnit: 'millisecond',
      },
      'unminified-javascript': {
        id: 'unminified-javascript',
        title: 'Minify JavaScript',
        description:
          'Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).',
        score: 1,
        scoreDisplayMode: 'numeric',
        details: {
          headings: [],
          items: [],
          overallSavingsMs: 0,
          overallSavingsBytes: 0,
          type: 'opportunity',
        },
        warnings: [],
        numericValue: 0,
        numericUnit: 'millisecond',
      },
      'server-response-time': {
        id: 'server-response-time',
        title: 'Initial server response time was short',
        description:
          'Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).',
        score: 1,
        scoreDisplayMode: 'binary',
        displayValue: 'Root document took 150 ms',
        details: {
          overallSavingsMs: 54.86099999999999,
          items: [
            {
              responseTime: 154.861,
              url: 'https://iwtttter.tech/',
            },
          ],
          type: 'opportunity',
          headings: [
            {
              key: 'url',
              label: 'URL',
              valueType: 'url',
            },
            {
              key: 'responseTime',
              label: 'Time Spent',
              valueType: 'timespanMs',
            },
          ],
        },
        numericValue: 154.861,
        numericUnit: 'millisecond',
      },
    },
  },
}
