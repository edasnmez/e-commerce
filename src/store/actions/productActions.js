import api from '../../api';

export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (products) => ({ type: 'SET_PRODUCT_LIST', payload: products });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setFetchState = (state) => ({ type: 'SET_FETCH_STATE', payload: state });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });
export const setSort = (sort) => ({ type: 'SET_SORT', payload: sort });

export const fetchProducts = ({ category, filter, sort, limit, offset }) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("loading"));

      const params = {};
      if (category) params.category = category;
      if (filter) params.filter = filter;
      if (sort) params.sort = sort;
      if (limit) params.limit = limit;
      if (offset !== undefined) params.offset = offset;

      const res = await api.get("/products", { params });
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("success"));
    } catch (error) {
      dispatch(setFetchState("error"));
      console.error(error);
    }
  };
};

export const setProductDetail = (product) => ({
  type: 'SET_PRODUCT_DETAIL',
  payload: product,
});

export const setProductDetailFetchState = (state) => ({
  type: 'SET_PRODUCT_DETAIL_FETCH_STATE',
  payload: state,
});


export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(setProductDetailFetchState('loading'));
      const res = await api.get(`/products/${productId}`);
      dispatch(setProductDetail(res.data));
      dispatch(setProductDetailFetchState('success'));
    } catch (error) {
      console.error(error);
      dispatch(setProductDetailFetchState('error'));
    }
  };
};