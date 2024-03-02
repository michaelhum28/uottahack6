import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '/src/styles/Card.css';

const Card = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Content Title
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <img src="https://source.unsplash.com/random/800x600" alt="Random image" />
      <p className="Text">Content Description Goes Here</p>

      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Like</button>
      </div>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button Blue">Save</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default Card;