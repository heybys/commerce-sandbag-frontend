import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface UserAvatarProps extends HTMLAttributes<HTMLDivElement> {
  profileImageUrl: string;
}

export const UserAvatar = ({ profileImageUrl, className, ...props }: UserAvatarProps) => {
  return (
    <div className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer relative ${className}`} {...props}>
      <Image
        src={profileImageUrl}
        alt={`${profileImageUrl}-profile`}
        className={`w-full h-full object-cover`}
        width={32}
        height={32}
        priority={true}
        loading="eager"
      />
    </div>
  );
};
