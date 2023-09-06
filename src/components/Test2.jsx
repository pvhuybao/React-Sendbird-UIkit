import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import sendbirdSelectors from "@sendbird/uikit-react/sendbirdSelectors";
import ChannelList from "@sendbird/uikit-react/ChannelList";
import { useChannelContext, ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import { useChannelListContext, ChannelListProvider } from '@sendbird/uikit-react/ChannelList/context';
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import Channel from "@sendbird/uikit-react/Channel";

import { useState } from 'react'
import '../App.css'

const MyFileMessageComponent = ({ message, chainTop, chainBottom }) => {
  const {
    currentGroupChannel,
    scrollToMessage,
  } = useChannelContext();
  const globalStore = useSendbirdStateContext();
  // Use sendbirdSelectors and globalStore to implement onDeleteMessage, onUpdateMessage, onResendMessage.
  const deleteFileMessage = sendbirdSelectors.getDeleteMessage(globalStore);
  if (message.messageType === 'file') {
    return (
      <div className="custom-file-message">
        <button
          className="custom-file-message__delete-button"
          onClick={deleteFileMessage(currentGroupChannel, message)}
        />
            Implement your code here.
      </div>
    )
  }
  return null;
}

const MyMessageInput = ({message, chainTop, chainBottom }) => {
  console.log('message', message)
  const channelContext = useChannelContext()
  console.log('channelContext', channelContext)
  const globalStore = useSendbirdStateContext();
  console.log('globalStore', globalStore)
  // Use `sendbirdSelectors` and `globalStore` to implement `getSendUserMessage` and `getSendFileMessage`.
  // const sendUserMessage = sendbirdSelectors.getSendUserMessage(globalStore);
  // console.log('sendUserMessage', sendUserMessage)
  return (
    <div style={{ color: 'red' }}>test MyMessageInput {message.message}</div>
  );
}

const CustomChannelList = () => {
  const channelListState = useChannelListContext();
  console.log('channelListState', channelListState)
  return (
    <div>channelListState</div>
  )
}

const HeaderChannelList = (param) => {
  console.log('param', param)
  return (
    <div>header</div>
  )
}

const CustomChannelUI = () => {
  // const {
  //     emojiContainer,
  //     nicknamesMap,
  //     emojiAllMap,
  // } = useChannelContext();
  const channelContext = useChannelContext()
  console.log('channelContext', channelContext)
  return (
      <div>
        emoji Custom
      </div>
  );
};

function Test2() {
  return (
    <div className="App">
      <SendbirdProvider
        appId={"36E86D9D-46C3-4330-85D5-19FCA7F835BF"}
        userId={"2"}
        theme="dark"
      >
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div>
            <ChannelList
              className="custom-list"
              renderHeader={HeaderChannelList}
            />
            {/* <ChannelListProvider>
                <CustomChannelList />
            </ChannelListProvider> */}
          </div>
          <div style={{ width: "100%" }}>
            {/* <Channel
              channelUrl={"sendbird_group_channel_403775672_dd1785c0ee66046317e4853bcbf080f3312c74a2"}
              replyType="THREAD"
              renderMessage={MyMessageInput}
            /> */}
            <ChannelProvider
              channelUrl={"sendbird_group_channel_403775672_dd1785c0ee66046317e4853bcbf080f3312c74a2"}
            >
                <CustomChannelUI />
            </ChannelProvider>
          </div>
        </div>
      </SendbirdProvider>
    </div>
  )
}

export default Test2
