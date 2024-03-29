import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartInfo } from '../cart/cart.model';
import { MainInitialState } from './main.model';
import {
  fetchMainBannerData,
  fetchMdChoiceCategoryData,
  fetchMdChoiceProductData,
  fetchRandomCollectionData,
} from './main.thunks';

const initialState: MainInitialState = {
  code: '772',
  cartInfo: {
    name: '',
    short_description: '',
    list_image_url: '',
    original_price: 0,
    discount_rate: 0,
    discounted_price: 0,
    count: 0,
  },
  mainBannerData: {
    id: 0,
    title: '',
    subtitle: '',
    additional_text: null,
    template_code: '',
    template_type: '',
    event_code: '',
    data: [
      {
        id: '',
        image_url: '',
        link: '',
      },
    ],
  },
  mdChoiceCategoryData: [
    {
      code: '',
      name: '',
    },
  ],
  mdChoiceProductData: [
    {
      code: '',
      no: 0,
      name: '',
      short_description: '',
      list_image_url: '',
      original_price: 0,
      discounted_price: 0,
      discount_rate: 0,
      is_sold_out: false,
      sold_out_title: '',
      sold_out_text: '',
      sticker: null,
      count: 0,
    },
  ],
  randomCollectionData: {
    id: 0,
    title: '',
    subtitle: '',
    additional_text: null,
    template_code: '',
    template_type: '',
    event_code: '',
    data: {
      collection_code: '',
      has_more: true,
      products: [
        {
          no: 0,
          name: '',
          short_description: '',
          list_image_url: '',
          original_price: 0,
          discounted_price: 0,
          discount_rate: 0,
          is_sold_out: false,
          sold_out_title: '',
          sold_out_text: '',
          sticker: null,
          count: 0,
        },
      ],
    },
  },
  randomCollectionData2: {
    id: 0,
    title: '',
    subtitle: '',
    additional_text: null,
    template_code: '',
    template_type: '',
    event_code: '',
    data: {
      collection_code: '',
      has_more: true,
      products: [
        {
          no: 0,
          name: '',
          short_description: '',
          list_image_url: '',
          original_price: 0,
          discounted_price: 0,
          discount_rate: 0,
          is_sold_out: false,
          sold_out_title: '',
          sold_out_text: '',
          sticker: null,
          count: 0,
        },
      ],
    },
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    updateCart: (state, action: PayloadAction<CartInfo>) => {
      state.cartInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMainBannerData.fulfilled, (state, action) => {
      state.mainBannerData = action.payload.mainBannerDataResponse;
    });

    builder.addCase(fetchMdChoiceCategoryData.fulfilled, (state, action) => {
      state.mdChoiceCategoryData = action.payload.mdChoiceCategoryDataResponse;
    });

    builder.addCase(fetchMdChoiceProductData.fulfilled, (state, action) => {
      state.mdChoiceProductData = action.payload.mdChoiceProductDataResponse;
    });

    builder.addCase(fetchRandomCollectionData.fulfilled, (state, action) => {
      state.randomCollectionData = action.payload.randomCollectionDataResponse;
      state.randomCollectionData2 =
        action.payload.randomCollectionData2Response;
    });
  },
});

export const { updateCode, updateCart } = mainSlice.actions;

export default mainSlice.reducer;
