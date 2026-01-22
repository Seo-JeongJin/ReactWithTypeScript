import { useState } from 'react';

export default function Notification() {
  const [showNotification, setShowNotification] = useState(false);
  const handleShowNotification = () => {
    setShowNotification((showNotification) => !showNotification);
  };
  return (
    <>
      <h1>
        {(showNotification && '📢 새로운 알림이 도착했습니다!') ||
          (!showNotification && null)}
      </h1>

      <button onClick={handleShowNotification}>
        {(showNotification && '알림 닫기') ||
          (!showNotification && '알림 보기')}
      </button>
    </>
  );
}
