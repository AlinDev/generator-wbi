const userChaosPreDataForNextDisplay=(){

  return  [userId, tokenTr]
};
const Chaos = () => {
  const [userId] = userChaosPreDataForNextDisplay();

  return <View>
    <ViewForUser userId  />
    <ViewForProfile userId/>

  </View>

}

const userReduxUser = (userId) => {
  const dispatch = useDispatch();
  const attempt = dispatch(userSlice.actions.fetch)
  return [attempt, user, userLoading, userSuccess, userFailure]
}

const ViewForUser = ({userId}) => {
  const [attempt, user, userLoading, userSuccess, userFailure] = useReduxUser(userId);
  const [attemptProfile ] = useReduxProfile(userId )
  useEffect(() =>{
    attempt()

  },[])
  if loading return <Loading/>
  if failure return <Failure failure/>

  return <View click() = {}>
        <ViewForUser data = user/>
    </View>

}

/////////////

const userReduxProfile= (userId) => {
  const dispatch = useDispatch();
  const attempt = dispatch(profileSlice.actions.fetch)
  return [attempt, user, userLoading, userSuccess, userFailure]
}
const ViewForProfile =  ({userId}) => {
  const {profile, profileLoading, success, userilure} = useReduxUserProfile(userId);
  const elementRef = useRef(this);

  if loading return <Loading/>
  if failure return <Failure failure/>

  return < >
    <DragBehaviour >
      <stuf data = profile/>
    </DragBehaviour>
  </ >

}

const DragBehaviour =  ({children}) => {
  const [xPosition, setxPosition] = useState()

  const doSomeStuff = (info ) => {
    info.current.position
  }

  children.onDragStart = doSomeStuff

  return ''

}
