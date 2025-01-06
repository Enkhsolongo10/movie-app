'use client';

import { ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type searchInputProps = {
    value: string;
    handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput() {
    return(
            <Input
              type = "text"
              value = {value}
              placeholder='Search...'
              onChange={handleChange}
              className='h-10 p-4' 
            />
    );
};
