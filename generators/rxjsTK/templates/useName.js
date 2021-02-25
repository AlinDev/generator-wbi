import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { <%= name %>Slice  } from "./<%= name %>.redux/<%= name %>.slice";

export const useRedux<%= Name %> = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.core.access);
    const {status:{fetching,isSuccessful,submitted}} = useSelector((state) =>  state. )
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
    return { <%= name %>,<%= name %>Reset,<%= name %>Update,fetching,isSuccessful,submitted };
};

