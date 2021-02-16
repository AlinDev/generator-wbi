import { useDispatch, useSelector } from "react-redux";
import { <%= name %>Slice  } from "./<%= name %>.redux/<%= name %>.slice";

export const use<%= Name %> = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.core.access);
    const {fetching} = useSelector((state) =>  state.xxx)
    const <%= name %> =  useCallback(( values ) => {
        dispatch(
            <%= name %>Slice .actions.fetch({
                accessToken: accessToken,
                input: { ...values },
                args: { ...values },
            })
        );
    },[dispatch,accessToken]);
    return { <%= name %>,fetching };
};

