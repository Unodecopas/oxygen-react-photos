import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const APIKEY = process.env.REACT_APP_APIKEY
const URI = process.env.REACT_APP_URI


export const searchImages = createAsyncThunk(
  'searchImages/fetchImages',
  async ({ searchKeyword, page = 1 }) => {
    const options = {
      headers: {
        Authorization: `Client-ID ${APIKEY}`
      }
    }
    let url
    searchKeyword.length === 0
    ? url = `${URI}/photos?per_page=30&order_by=popular&page=${page}`
      : url = `${URI}/search/photos?query=${searchKeyword}&per_page=30&page=${page}`

    const res = await fetch(url, options)
    const data = await res.json()

    if (searchKeyword.length !== 0) return { results: data.results, totalPages: data.total_pages, currentPage: page }

    return { results: data, totalPages: 20, currentPage: page }
  }
)

export const searchImagesSlice = createSlice({
  name: 'searchImages',
  initialState: {
    results: {},
    status: null,
    term: ''
  },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.term = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchImages.pending, state => {
        state.status = 'loading'
      })
      .addCase(searchImages.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.results = action.payload
      })
      .addCase(searchImages.rejected, state => {
        state.status = 'error'
      })
  }
})

export const { setSearchKeyword } = searchImagesSlice.actions

export const selectSearchImages = (state) => state.searchImages.results
export const selectStatusSearchImages = (state) => state.searchImages.status
export const selectSearchKeyword = (state) => state.searchImages.term

export default searchImagesSlice.reducer