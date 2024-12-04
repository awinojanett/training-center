const Accreditation = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Accreditations</h2>
        <div className="flex justify-center gap-12">
          {/* American Heart Association Logo */}
          <img 
            src="/AHA.jpg" 
            className="h-16"
          />
          
          {/* Directorate of Occupational Safety and Health Logo */}
          <img 
            src="/safety.png" 
            className="h-16"
          />
          
          {/* Kenya Council of Emergency Medical Technicians Logo */}
          <img 
            src="/last.jpg" 
            className="h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
