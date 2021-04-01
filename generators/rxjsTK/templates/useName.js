import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { <%= name %>Slice  } from "./<%= name %>.redux/<%= name %>.slice";

export const useRedux<%= Name %> = () => {
    const dispatch = useDispatch();
    const { accessToken } = useReduxAccess();
    const {status:{fetching,isSuccessful,submitted}} = useSelector((state) =>  state. )

    const { show } = useReduxLoading();
    const <%= name %> =  useCallback(( values ) => {
        dispatch(
            <%= name %>Slice.actions.fetch({
                accessToken: accessToken,
                input: { ...values },
                args: { ...values },
            })
        );
    },[dispatch,accessToken]);

    const <%= name %>Reset =  useCallback((  ) => {
    dispatch( <%= name %>Slice.actions.reset( ) );
    },[dispatch]);

    const <%= name %>Update =  useCallback(( key,value ) => {
    dispatch(  <%= name %>Slice.actions.update({key,value }) );
    },[dispatch]);


    const showLoading = useCallback(() => {
      show("<%= name %>");
    }, [dispatch]);

    return {showLoading, <%= name %>,<%= name %>Reset,<%= name %>Update,fetching,isSuccessful,submitted };
};

