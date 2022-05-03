import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Video } from '../components/Video';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Video,
  title: 'Video',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  videoData: {
    kind: 'youtube#playlistItemListResponse',
    etag: 'kV0eggIQdvt6tgl-RbbflmiweNA',
    nextPageToken: 'EAAaBlBUOkNBRQ',
    items: [
      {
        kind: 'youtube#playlistItem',
        etag: 'BCveZ4ByLCIHd9VPhDK7kNGwONw',
        id: 'VVU0MFR3MnRGdU16SzMwNW1pN25qOHJnLnB4YmJ2RUxQWk04',
        snippet: {
          publishedAt: '2022-05-02T16:26:14Z',
          channelId: 'UC40Tw2tFuMzK305mi7nj8rg',
          title: 'Tuesday morning forecast 03/05/22',
          description: '03 May - National weather forecast by Sarah Kent',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/pxbbvELPZM8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/pxbbvELPZM8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/pxbbvELPZM8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Met Office - Weather',
          playlistId: 'UU40Tw2tFuMzK305mi7nj8rg',
          position: 0,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'pxbbvELPZM8',
          },
          videoOwnerChannelTitle: 'Met Office - Weather',
          videoOwnerChannelId: 'UC40Tw2tFuMzK305mi7nj8rg',
        },
      },
    ],
    pageInfo: {
      totalResults: 7500,
      resultsPerPage: 1,
    },
  },
};
