interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace("rem", " ")) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
