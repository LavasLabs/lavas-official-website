import React, { useState } from 'react';
import { Modal, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import './index.css';

interface GeoRestrictionModalProps {
  open: boolean;
  onClose: () => void;
  onDontShowAgain: () => void;
  isLoading?: boolean;
}

const GeoRestrictionModal: React.FC<GeoRestrictionModalProps> = ({
  open,
  onClose,
  onDontShowAgain,
  isLoading = false
}) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isButtonShaking, setIsButtonShaking] = useState(false);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setDontShowAgain(e.target.checked);
  };

  const handleContinue = () => {
    if (dontShowAgain) {
      onDontShowAgain();
    } else {
      onClose();
    }
  };

  // 处理点击弹窗外的事件
  const handleMaskClick = () => {
    // 触发按钮弹跳动画
    setIsButtonShaking(true);
    
    // 动画完成后重置状态
    setTimeout(() => {
      setIsButtonShaking(false);
    }, 600);
  };

  return (
    <Modal
      open={open}
      onCancel={handleMaskClick}
      footer={null}
      closable={false}
      maskClosable={true}
      centered
      width={560}
      className="geo-restriction-modal"
      styles={{
        content: {
          borderRadius: '30px',
          padding: '0',
          backgroundColor: '#ffffff',
        },
        mask: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
      }}
    >
      <div className="flex flex-col px-[40px] py-[24px]">
        <h2 className="text-[26px] font-bold text-[#2c2c2c] mb-[32px] text-center leading-[1.2] tracking-[-0.5px]">
          Cross-border Services Restrictions
        </h2>

        {/* 文本 */}
        <div className="text-[16px] text-[#000000] leading-[1.6] space-y-[24px] mb-[40px]">
          <p className="mb-0">
            You are trying to access our website from an IP address located outside Hong Kong.
          </p>
          
          <p className="mb-0">
            Please note that the promotion and/or distribution of our products and/or services outside Hong Kong may require a licence. The content of our website is only addressed to Hong Kong residents, domiciled in Hong Kong.
          </p>
          
          <p className="mb-0">
            If you are a resident domiciled outside Hong Kong and do not wish to visit our website, please close this page. If you still want to visit our website, click Continue and in doing so, you confirm that you have read and understood the above and that you are accessing our website on your own initiative without active promotion or solicitation from Lavas.
          </p>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={handleContinue}
          loading={isLoading}
          disabled={isLoading}
          className={`w-full h-[60px] text-[16px] font-semibold rounded-[30px] bg-[#2c2c2c] hover:bg-[#404040] active:bg-[#1a1a1a] border-none mb-[24px] shadow-none transition-all duration-200 ${
            isButtonShaking ? 'animate-button-shake' : ''
          }`}
          style={{
            boxShadow: 'none',
          }}
        >
          Continue
        </Button>

        {/* Don't show again */}
        <div className="flex items-center justify-start">
          <Checkbox
            checked={dontShowAgain}
            onChange={handleCheckboxChange}
            className="geo-restriction-checkbox mr-[12px]"
          />
          <span className="text-[16px] text-[#5a5a5a] font-normal select-none cursor-pointer" onClick={() => setDontShowAgain(!dontShowAgain)}>
            Don't show again
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default GeoRestrictionModal; 