import { useDispatch, useSelector } from "react-redux";
import { <%= name %>Slice  } from "./<%= name %>.redux/<%= name %>.slice";

export const use<%= Name %> = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.core.access);
    const {fetching} = useSelector((state) => XXXstate.xxx)
    const submit = ( values ) => {
        dispatch(
            <%= name %>Slice .actions.fetch({
                accessToken: accessToken,
                input: { ...values },
                args: { ...values },
            })
        );
    };
    return { submit,fetching };
};

