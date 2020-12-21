import { useDispatch, useSelector } from "react-redux";
import { <%= name %>Slice  } from "./<%= name %>.redux/<%= name %>.slice";
export const use<%= Name %> = () => {
    const navigator = useLoggableNavigation();
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.core.access);
    const submitChange = ( values ) => {
        dispatch(
            <%= name %>Slice .actions.fetch({
                accessToken: accessToken,
                input: { values },
            })
        );
        navigator.pop();
    };
    return { submitChange };
};

